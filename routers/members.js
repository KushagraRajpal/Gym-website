const express = require('express');
const router = new express.Router();
const Member = require("../db/db")

const path = require('path');
const staticPath = path.join(__dirname, "../static")
router.use(express.static(staticPath));

router.get('/', (req, res) => {
    res.send('index.html')
});

router.post('/', async (req, res) => {
    try {
        const user = new Member(req.body);
        const createUser = await user.save();
        res.status(201).send("your data has been saved");
    } catch (err) {
        res.status(400).send(err);
    }

});
module.exports = router