import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Schéma de validation
const contactSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(1, 'Le message est requis'),
});

// Cache du transport SMTP
let transporter: nodemailer.Transporter | null = null;

const getTransporter = () => {
  if (!transporter) {
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
    };

    transporter = nodemailer.createTransport(transportOptions);
  }
  return transporter;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validation des données
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    const transporter = getTransporter();

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

    // Envoi de l'e-mail
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'E-mail envoyé avec succès',
      messageId: info.messageId 
    });
  } catch (error: any) {
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