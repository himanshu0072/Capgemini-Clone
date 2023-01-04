const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/contactForm';

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`DB Connected Successfully.`);
  })
  .catch((err) => {
    console.log(`DB Connection Failed.`);
  });
