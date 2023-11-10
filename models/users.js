const mongoose = require('mongoose');

//Contacts mongoose schema for queries
const userSchema = new mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
});

module.exports = mongoose.model('Contacts', userSchema);