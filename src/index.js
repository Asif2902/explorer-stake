// src/index.js
const express = require('express');
const path = require('path');
const { getTransactions, getTransactionDetails } = require('./controllers/transactionController');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', getTransactions);
app.get('/transaction/:hash', getTransactionDetails); // Route for single transaction details

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
