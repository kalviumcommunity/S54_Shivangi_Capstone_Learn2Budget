const mongoose = require('mongoose');
const { Schema } = mongoose;

const goalSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    currentAmount: { type: Number, default: 0 },
    targetDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Goal', goalSchema);
  