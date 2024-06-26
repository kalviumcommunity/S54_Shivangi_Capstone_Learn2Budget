const mongoose = require('mongoose')
require('dotenv').config({ path: '../.env' });

function connectToDB() {
    return mongoose.connect(process.env.MONGO_URL)
}

module.exports = connectToDB;