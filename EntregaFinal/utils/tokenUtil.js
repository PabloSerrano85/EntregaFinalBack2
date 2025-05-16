// src/utils/tokenUtil.js
import jwt from 'jsonwebtoken';

export function generateResetToken(email) {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export function verifyResetToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

if (bcrypt.compareSync(newPassword, user.password)) {
    return res.status(400).send("No puedes usar la misma contraseña anterior.");
  }
  