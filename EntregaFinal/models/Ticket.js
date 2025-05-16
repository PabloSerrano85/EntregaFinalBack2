// src/models/Ticket.js
const TicketSchema = new mongoose.Schema({
    code: String,
    amount: Number,
    purchaser: String,
    products: [/* lista de productos */],
    purchase_datetime: Date
  });
  