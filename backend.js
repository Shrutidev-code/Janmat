const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/votingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the schema and model for a voter
const voterSchema = new mongoose.Schema({
  aadharNumber: String,
  pinCode: String,
});
const Voter = mongoose.model('Voter', voterSchema);

// Define the API route to check voter eligibility
app.post('/check-eligibility', async (req, res) => {
  const { aadharNumber, pinCode } = req.body;

  // Check if the voter exists in the database
  const voter = await Voter.findOne({ aadharNumber, pinCode }).exec();

  if (voter) {
    res.json({ eligible: true, message: 'You are eligible to vote.' });
  } else {
    res.json({ eligible: false, message: 'You are not eligible to vote.' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
