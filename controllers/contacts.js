require('dotenv').config();
const ObjectId = require('mongoose').Types.ObjectId;
const Contacts = require('../models/contacts');

//Get all users function
const getAll = async (req, res) => {
    //#swagger.tags=['Contacts']
    try {
        const contacts = await Contacts.find({});
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error.message);
    }
};

//Get single user by id function
const getSingle = async (req, res) => {
    //#swagger.tags=['Contacts']
    try {
        const id = new ObjectId(req.params.id)
        const contact = await Contacts.findOne({ _id: id })
        res.status(200).json(contact);
    } catch (error) {
        console.error(error.message);
    }
};

//Create new contact function
const createContact = async (req, res) => {
   //#swagger.tags=['Contacts']
   try {
       const data = {
           firstName: req.body.firstName,
           lastName: req.body.lastName,
           email: req.body.email,
           favoriteColor: req.body.favoriteColor,
           birthday: req.body.birthday
       }
       const contact = await Contacts.create(data);
       res.status(204).send();
   } catch (error) {
        console.error(error);
   }
   
};

//Update contact function
const updateContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const id = new ObjectId(req.params.id)
    const data = {
        _id: id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const contact = await Contacts.replaceOne({ _id: id }, data)
    if (contact.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(contact.error);
        console.log(contact.error);
    }
};

//Delete contact function
const deleteContact = async (req, res) => {
    //#swagger.tags=['Contacts']
    const id = new ObjectId(req.params.id)
    const contact = await Contacts.deleteOne({ _id: id });
    if (contact.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(contact.error);
        console.log(contact.error);
    };
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
}