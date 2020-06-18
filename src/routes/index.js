const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment/payment');


router.get('/configurations', paymentController.configurations);
router.post('/orders', paymentController.orders);

module.exports = router;
