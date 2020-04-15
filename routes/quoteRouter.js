const router = require('express').Router();
const {
  getQuote,
  postQuote,
  likeQuote,
} = require('../controllers/quoteController');

router.route('/').get(getQuote).post(postQuote);
router.route('/:id/like').post(likeQuote);

module.exports = router;
