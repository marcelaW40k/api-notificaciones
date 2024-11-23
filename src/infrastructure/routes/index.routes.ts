import express from "express";
import { NodemailerEmailService } from "../services/nodemailer.services";
import { EmailOptipons } from "../../domain/EmailOptions";
import { pbkdf2 } from "crypto";

const router = express.Router();

 router.post("/api/v1/notificaciones/correo", (req, res) => {
    const payload = req.body;
    const mailService = new NodemailerEmailService()
    
    const options: EmailOptipons = {
        to: payload.to,
        subject: payload.subject,
        body: payload.body,
        pdf: payload.pdf ? Buffer.from(payload.pdf, 'base64') : undefined
    }
    mailService.sendEmail(options).then(() => {
        console.log('El correo se envio');
    }).catch(error => {
        console.error('El correo NO se envio', error);
    })

    res.json({ok: true, message: "Solicitud de envio de correo aceptada"});
 });

export default router;

