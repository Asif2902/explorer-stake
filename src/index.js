// server.js
const express = require('express');
const path = require('path');
const { getTransactions, getTransactionDetails } = require('./src/controllers/transactionController');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS for rendering pages
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Serve static files (e.g., CSS) from 'public' directory
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Route to fetch and display contract transactions
app.get('/', getTransactions);

// Route to view individual transaction details (if needed)
app.get('/transaction/:hash', getTransactionDetails);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
