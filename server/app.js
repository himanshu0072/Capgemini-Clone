const express = require('express');
require('./db/connect');
const cors = require('cors');
const Contact = require('./model/contact');
const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   Contact.find((err, data) => {
//     if (!err) {
//       res.send(data);
//     } else {
//       res.send(err);
//     }
//   });
// });

app.post('/addContact', async (req, res) => {
  try {
    const addContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    await addContact.save();

    Contact.find({ phone: req.body.phone }, (err, data) => {
      res.status(200).send(`Your mail recieved to us, we'll reach you soon.`);
      console.log(data);
    });
  } catch (err) {
    res.status(500).send(`⚠️Server Error, Please try again.`);
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started listening on http://localhost:${port}`);
});
