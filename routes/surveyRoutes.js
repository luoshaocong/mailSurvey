const mongoose = require('mongoose');
const  requireLogin = require('../middlewares/requireLogin');
const  requireCredit = require('../middlewares/requireCredit');

const Survey = mongoose.model('surveys');
  app.post('/api/surveys', requireLogin,requireCredit,(req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
    //  titl:title
      title,
      body,
      subject,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      date:  Date.now()


    });


  });
};
