require('dotenv').config();
const ObjectId = require('mongoose').Types.ObjectId;
const Contacts = require('../models/users');

const getAll = async (req, res) => {
    try {
        const users = await Contacts.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
    }
};

const getSingle = async (req, res) => {
    try {
        const id = new ObjectId(req.params.id)
        const user = await Contacts.findOne({ _id: id })
        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = {
    getAll,
    getSingle
}