// src/utils/helpers.js
function formatValue(value) {
  return (value / 1e18).toFixed(4); // Convert Wei to Ether
}

function calculateAge(timestamp) {
  const now = Date.now() / 1000;
  const secondsAgo = now - timestamp;
  const minutes = Math.floor(secondsAgo / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  return `${minutes} minutes ago`;
}

function getFunctionName(input) {
  const functionMap = {
    "0x2e17de78": "unstake",
    "0xc885bc58": "Claim Rewards",
    "0x3a4b66f1": "stake"
  };
  const signature = input.slice(0, 10);
  return functionMap[signature] || "Unknown";
}

module.exports = { formatValue, calculateAge, getFunctionName };
