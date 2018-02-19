const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountSchema = new Schema({
  createdAt: Date,
  accountNumber: { type: Number, required: true },
  balance: Number,
  daysLeft: Number,
  nextMonthPayment: Number,
  paymentType: String,
  currentPlan: {
    name: { type: String, required: true },
    usage: {
      used: Number,
      left: Number,
      total: Number,
      meta: {
        trafficData: [{
          date: Date,
          amount: Number,
          download: Number,
          upload: Number
        }],
      }
    }
  },
});

module.exports = mongoose.model('Account', AccountSchema);
