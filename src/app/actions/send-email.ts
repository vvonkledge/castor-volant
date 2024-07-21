'use server'

import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function sendEmail() {
    const email = "alexandre.leroy@turtleshell.fr"
    const message = "Aucun message"

    // Configurez le transporteur SMTP
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_APPLICATION_USER,
            pass: process.env.GMAIL_APPLICATION_PASSWORD
        }
    })

    // Définissez les options de l'email
    let mailOptions: Mail.Options = {
        from: '"Votre Nom" <votre_email@example.com>',
        to: email,
        subject: "Sujet de l'email",
        text: message,
        html: `<p>${message}</p>`,

    }

    try {
        // Envoyez l'email
        let info = await transporter.sendMail(mailOptions)
        console.log("Email envoyé : %s", info.messageId)
        return { success: true, message: "Email envoyé avec succès" }
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error)
        return { success: false, message: "Erreur lors de l'envoi de l'email" }
    }
}