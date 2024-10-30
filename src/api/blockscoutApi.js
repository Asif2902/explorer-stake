// src/api/blockscoutApi.js
const axios = require('axios');
const { BLOCKSCOUT_API_URL, CONTRACT_ADDRESS } = require('../config/config');

async function fetchContractTransactions() {
  const url = `${BLOCKSCOUT_API_URL}?module=account&action=txlist&address=${CONTRACT_ADDRESS}`;
  try {
    const response = await axios.get(url);
    return response.data.result || [];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
}

module.exports = { fetchContractTransactions };
