const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // TTL: document will be removed 24 hours (86400 seconds) after creation
    expires: 24 * 60 * 60,
  },
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
