/*
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shruti@04',
  database: 'user_verification',
});

// Establish the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Create Express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Serve login page
app.get('/', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="text" name="aadhar" placeholder="Aadhar" required />
      <input type="password" name="pin" placeholder="PIN" required />
      <button type="submit">Login</button>
    </form>
  `);
});




// Define login route
app.post('/login', (req, res) => {
  const aadhar = req.body.aadhar;
  const pin = req.body.pin;

  // Query the database for the provided Aadhaar Card Number and Pin Code
  const query = 'SELECT * FROM users WHERE aadhar = ? AND pincode = ?';
  connection.promise().query(query, [aadhar, pin])
    .then(([results, fields]) => {
      // Check if any rows matched the login credentials
      if (results.length > 0) {
        // Successful login
        // res.status(200).send('Login successful');
        res.send('Login successful');
      } else {
        // Invalid login credentials
        // res.status(401).send('Invalid login credentials');
        res.send('Invalid login credentials');
        }
    })
    .catch((err) => {
      console.error('Error executing the query:', err);
      res.status(500).send('Internal Server Error');
    });
});

// Start the server
app.listen(3002, () => {
  console.log('Server listening on port 3002');
});
*/
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shruti@04',
  database: 'user_verification',
});

// Establish the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Create Express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve login page
app.get('/', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <input type="text" name="aadhar" placeholder="Aadhar" required />
      <input type="password" name="pin" placeholder="PIN" required />
      <button type="submit">Login</button>
    </form>
  `);
});

// Define login route
app.post('/login', (req, res) => {
  const aadhar = req.body.aadhar;
  const pin = req.body.pin;

  // Query the database for the provided Aadhaar Card Number and Pin Code
  const query = 'SELECT * FROM users WHERE aadhar = ? AND pincode = ?';
  connection.promise()
    .query(query, [aadhar, pin])
    .then(([results, fields]) => {
      // Check if any rows matched the login credentials
      if (results.length > 0) {
        // Successful login
        res.redirect('/facial.html'); // Redirect to the facial.html page
      } else {
        // Invalid login credentials
        res.send('Invalid login credentials');
      }
    })
    .catch((err) => {
      console.error('Error executing the query:', err);
      res.status(500).send('Internal Server Error');
    });
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3002, () => {
  console.log('Server listening on port 3002');
});
