import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  console.log('Route API appelée');
  try {
    const { name, email, message } = await request.json();
    console.log('Données reçues:', { name, email, message });

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Vérification de la connexion SMTP
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log('Erreur de vérification SMTP:', error);
          reject(error);
        } else {
          console.log("Connexion SMTP réussie");
          resolve(success);
        }
      });
    });

    // Envoi de l'e-mail
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'alexandre.hernandez@yahoo.com',
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    console.log('E-mail envoyé avec succès');
    return NextResponse.json({ message: 'E-mail envoyé avec succès' });
  } catch (error: any) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'e-mail', details: error.message }, { status: 500 });
  }
}