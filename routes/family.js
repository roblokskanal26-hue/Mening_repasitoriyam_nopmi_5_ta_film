const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        name: 'Muhammadyunus',
        age: 16,
        job: 'Frontend'
    });
});

module.exports = router;