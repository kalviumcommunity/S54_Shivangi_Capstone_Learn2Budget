const budgetSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    totalIncome: { type: Number, required: true },
    totalExpenses: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Budget', budgetSchema);
  