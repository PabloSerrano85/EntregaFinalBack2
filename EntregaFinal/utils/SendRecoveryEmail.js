// src/utils/sendRecoveryEmail.js
import nodemailer from 'nodemailer';
import { generateResetToken } from './tokenUtil.js';

export async function sendRecoveryEmail(userEmail) {
  const token = generateResetToken(userEmail);
  const url = `${process.env.FRONTEND_URL}/reset-password/${token}`;
  const transporter = nodemailer.createTransport({ /* config */ });
  await transporter.sendMail({
    to: userEmail,
    subject: "Recuperación de contraseña",
    html: `<a href="${url}">Restablecer contraseña</a>`
  });
}
