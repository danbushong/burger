const express = require('express');

const router = express.Router();

// This will be the Database functions that use the ORMs
const burger = require('../models/burger.js');

// Get items from DB and respond with the index file
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        res.render('index', hbsObject);
    });
});

// Create new items and send them to DB
router.post('/api/burgers', (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// Update items in the DB
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    // console.log('condition', condition);
    // Update the status of devoured
    burger.updateOne(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;