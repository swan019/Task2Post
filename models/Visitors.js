import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true }, // Store IP addresses
  visitDate: { type: Date, default: Date.now }
});

const Visitor = mongoose.model('Visitor', visitorSchema);

export default Visitor;
