const router = require('express').Router();
const { getQuote, postQuote } = require('../controllers/quoteController');

router.route('/').get(getQuote).post(postQuote);

module.exports = router;
