// src/utils/helpers.js
function formatValue(value) {
    return (value / 1e18).toFixed(4); // Convert Wei to Ether
  }
  
  module.exports = { formatValue };
  