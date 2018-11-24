
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);




module.exports = app => {
  app.post('/api/stripe',requireLogin, async (req, res) => {

    //console.log(req.body);
    const charge = await stripe.charges.create({
      amount:500,
      currency:'usd',
      description:'give me your money',
      source: req.body.id
    });
    console.log(charge);
    req.user.credits += 5;
    //
    const user = await req.user.save();
    res.send(user);


  });




};
