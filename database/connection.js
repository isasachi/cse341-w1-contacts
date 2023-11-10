const mongoose = require('mongoose');

async function dbConnect(uri) {
    try {
        const conn = await mongoose.connect(uri, {
            dbName: 'contacts'
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = dbConnect;