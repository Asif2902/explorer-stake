// src/controllers/transactionController.js
const { fetchContractTransactions } = require('../api/blockscoutApi');
const { NETWORK_EXPLORER_URL } = require('../config/config');

async function getTransactions(req, res) {
  const transactions = await fetchContractTransactions();
  const { wallet } = req.query;

  const filteredTransactions = wallet
    ? transactions.filter(tx => tx.from.toLowerCase() === wallet.toLowerCase() || tx.to.toLowerCase() === wallet.toLowerCase())
    : transactions;

  res.render('index', { transactions: filteredTransactions, wallet, NETWORK_EXPLORER_URL });
}

async function getTransactionDetails(req, res) {
  const transactions = await fetchContractTransactions();
  const transaction = transactions.find(tx => tx.hash === req.params.hash);

  if (!transaction) {
    return res.status(404).send('Transaction not found');
  }

  res.render('transaction', { transaction });
}

module.exports = { getTransactions, getTransactionDetails };
