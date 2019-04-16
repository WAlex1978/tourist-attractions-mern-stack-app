const app = require('express').Router();
const Location = require('../models/location');

app.get('/', async (req, res) => {
    try {
        const params = {};
        if (req.query.name !== null && req.query.name !== '') {
            params = new RegExp(req.query.name, 'i');
        }

        const data = await Location.find({name: params});

        res.send(data);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = app;