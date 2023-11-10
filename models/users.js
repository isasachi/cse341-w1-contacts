const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
});

module.exports = mongoose.model('Contacts', userSchema);