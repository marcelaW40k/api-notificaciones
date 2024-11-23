import nodemailer from 'nodemailer';
import config from 'config';
import { MailOptions } from 'nodemailer/lib/json-transport';
import { EmailOptipons } from '../../domain/EmailOptions';

export class NodemailerEmailService {

    sendEmail(options: EmailOptipons) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })
     
        const attachments = []
        if (options.pdf) {
            attachments.push({
                filename: 'factura.pdf',
                content: options.pdf
            })
        }
        
        const mailOptions: MailOptions = {
            from: 'Marcela - yecnyardila90@gmail.com',
            to: options.to,
            subject: options.subject,
            text: options.body,
            attachments
        }
        return transporter.sendMail(mailOptions)
    }
}