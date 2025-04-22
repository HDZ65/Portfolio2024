import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Fonction de log personnalisée
const debugLog = (message: string, data?: any) => {
  const log = data ? `DEBUG - ${message}: ${JSON.stringify(data, null, 2)}` : `DEBUG - ${message}`;
  console.log('\x1b[36m%s\x1b[0m', log); // Cyan color
};

// Schéma de validation
const contactSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(1, 'Le message est requis'),
});

// Cache du transport SMTP
let transporter: nodemailer.Transporter | null = null;

const getTransporter = () => {
  debugLog("🚀 Initialisation du transporteur SMTP");
  
  if (!transporter) {
    // Vérification des variables d'environnement
    const config = {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      // Ne pas logger EMAIL_PASS pour des raisons de sécurité
      // pass: process.env.EMAIL_PASS, 
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO
    };

    debugLog("📧 Configuration email lue depuis process.env", config);

    const transportOptions = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '465'),
      secure: false, // Port 587 utilise STARTTLS, donc secure doit être false
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Attention : à utiliser avec prudence
      },
      debug: true, 
      logger: true 
    };

    debugLog("🔧 Options passées à createTransport (sans mot de passe)", {
      host: transportOptions.host,
      port: transportOptions.port,
      secure: transportOptions.secure,
      user: transportOptions.auth.user,
      tls_rejectUnauthorized: transportOptions.tls.rejectUnauthorized,
    });

    transporter = nodemailer.createTransport(transportOptions);
  }
  return transporter;
};

export async function POST(request: Request) {
  debugLog("📨 Nouvelle requête d'envoi d'email reçue");
  
  try {
    const body = await request.json();
    debugLog("📝 Données du formulaire reçues", body);
    
    // Validation des données
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      debugLog("❌ Erreur de validation", result.error.format());
      return NextResponse.json(
        { error: 'Données invalides', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    debugLog("✅ Données validées", { name, email });

    const transporter = getTransporter();

    // Vérification de la connexion SMTP
    debugLog("🔄 Tentative de vérification de la connexion SMTP...");
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          debugLog("❌ Erreur de vérification SMTP", error);
          reject(error);
        } else {
          debugLog("✅ Connexion SMTP réussie");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
    };

    debugLog("📧 Tentative d'envoi d'email", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // Envoi de l'e-mail
    debugLog("🚀 Tentative d'appel à transporter.sendMail...");
    const info = await transporter.sendMail(mailOptions);
    debugLog("✅ Email envoyé avec succès par sendMail", { messageId: info.messageId });

    return NextResponse.json({ 
      message: 'E-mail envoyé avec succès',
      messageId: info.messageId 
    });
  } catch (error: any) {
    debugLog("❌ Erreur lors de l'envoi", {
      message: error.message,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        error: 'Erreur lors de l\'envoi de l\'e-mail', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}