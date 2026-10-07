const Counselor = require('../models/Counselor');

const PRIMARY_COUNSELOR = {
    name: 'Sneha Lade',
    role: 'Counselor',
    qualification: 'B.Tech',
    department: 'CSE',
    college: 'KIT Kolhapur',
    profileImage: '',
    experience: 'CSE Student',
    field: 'CSE',
    cityName: 'Latur',
    contactNumber: '9096655942',
    email: 'ladesneha900@gmail.com',
    description: 'B.Tech CSE student from KIT Kolhapur providing college admission and CSE-related guidance.',
    rating: 5,
    reviewsCount: 0,
    isPrimary: true
};

async function seedPrimaryCounselor() {
    const existing = await Counselor.findOne({ isPrimary: true });
    if (existing) {
        Object.assign(existing, PRIMARY_COUNSELOR);
        await existing.save();
        return existing;
    }

    return Counselor.create(PRIMARY_COUNSELOR);
}

module.exports = { seedPrimaryCounselor, PRIMARY_COUNSELOR };
