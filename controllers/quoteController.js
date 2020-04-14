const Quote = require('../models/quote');

exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find();
    return res.json({
      success: true,
      data: {
        count: quotes.length,
        quotes,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};

exports.getQuote = async (req, res) => {
  console.log('here');
  try {
    const count = await Quote.count();
    console.log(count);
    const random = Math.floor(Math.random() * count);
    const quote = await Quote.findOne().skip(random);
    console.log(quote);
    if (!quote) {
      return res.json({
        success: true,
        data: {
          count: 0,
        },
      });
    }

    return res.json({
      success: true,
      data: {
        count: 1,
        quote,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
    });
  }
};

exports.postQuote = async (req, res) => {
  try {
    const { text, author } = req.body;
    const quote = new Quote({
      text,
      author,
    });
    await quote.save();
    return res.status(201).json({
      success: true,
      data: {
        count: 1,
        quote,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
    });
  }
};
