const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  avatar: String,
  email: { type: String, required: true },
  dob: String,
  password: { type: String, required: true },
  createdAt: Date,
  accounts: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Account' 
  }],
});

module.exports = mongoose.model('User', UserSchema);
