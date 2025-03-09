const Upload = require('../models/Upload');

// File Upload
exports.uploadFile = async (req, res) => {
    const { userId, title, fileUrl, regulation, semester, subject } = req.body;
    const newUpload = new Upload({ userId, title, fileUrl, regulation, semester, subject });
    
    try {
        await newUpload.save();
        res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get All Uploads
exports.getAllUploads = async (req, res) => {
    try {
        const uploads = await Upload.find();
        res.status(200).json(uploads);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
