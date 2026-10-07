const mongoose = require('mongoose');

const counselorSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    role: { type: String, default: 'Counselor' },
    qualification: { type: String, default: 'B.Tech' },
    department: { type: String, default: 'CSE' },
    college: { type: String, default: 'KIT Kolhapur' },
    profileImage: {
        type: String,
        default: ''
    },
    experience: { type: String, required: true },
    field: { type: String, required: true },
    cityName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String },
    description: { type: String, default: 'CSE student providing college and admission guidance.' },
    rating: { type: Number, default: 5 },
    reviewsCount: { type: Number, default: 0 },
    isPrimary: { type: Boolean, default: false, index: true },
    accessKey: {
        type: String,
        unique: true,
        sparse: true,
        default: undefined
    }
}, { timestamps: true });

module.exports = mongoose.model('Counselor', counselorSchema);
