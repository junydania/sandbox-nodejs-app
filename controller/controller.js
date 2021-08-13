var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: 'Welcome to Coda Payment Sandbox' });
});


router.get('/health', (req, res) => {
    res.status(200).json({ success: true, data: 'Yay! I am healthy! Thats right!' });
});


module.exports = router;