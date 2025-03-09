const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    fileUrl: { type: String, required: true },
    regulation: { type: String, required: true },
    semester: { type: String, required: true },
    subject: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Upload', uploadSchema);
