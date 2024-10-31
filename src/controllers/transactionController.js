// src/controllers/transactionController.js
const { fetchContractTransactions, fetchWalletBalance } = require('../api/blockscoutApi');
const { NETWORK_EXPLORER_URL } = require('../config/config');
const { formatValue, getFunctionName, calculateAge } = require('../utils/helpers');

async function getTransactions(req, res) {
  const { wallet } = req.query;
  const transactions = await fetchContractTransactions();
  
  let walletDetails = null;
  if (wallet) {
    const walletTransactions = transactions.filter(
      tx => (tx.from.toLowerCase() === wallet.toLowerCase() || tx.to.toLowerCase() === wallet.toLowerCase()) &&
            tx.to.toLowerCase() === CONTRACT_ADDRESS.toLowerCase()
    );

    const totalValue = walletTransactions.reduce((acc, tx) => acc + parseFloat(tx.value), 0);
    const firstTransaction = walletTransactions[walletTransactions.length - 1]; // earliest transaction
    const balance = await fetchWalletBalance(wallet);

    walletDetails = {
      balance: formatValue(balance),
      totalTransactions: walletTransactions.length,
      totalValue: formatValue(totalValue),
      firstTransactionDate: new Date(firstTransaction.timeStamp * 1000).toLocaleDateString(), // Convert timestamp to date
    };
  }

  res.render('index', { transactions, wallet, walletDetails, NETWORK_EXPLORER_URL });
}
