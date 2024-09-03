// services/top10Stocks.js

// Function to get the top 10 stocks based on % Change
function getTop10Gainers(data) {
  // Ensure data is not empty
  if (!data || data.length === 0) return []

  // Filter out rows without a % Change value
  const filteredData = data.filter(
    (item) => item["% Change"] && !isNaN(parseFloat(item["% Change"]))
  )

  // Sort the data by % Change in descending order
  const sortedData = filteredData.sort(
    (a, b) =>
      parseFloat(b["% Change"].replace(/,/g, "")) -
      parseFloat(a["% Change"].replace(/,/g, ""))
  )

  // Return the top 10 stocks
  return sortedData.slice(0, 10)
}

// Function to get the top 10 losers based on % Change
function getTop10Losers(data) {
  // Ensure data is not empty
  if (!data || data.length === 0) return []

  // Filter out rows without a % Change value
  const filteredData = data.filter(
    (item) => item["% Change"] && !isNaN(parseFloat(item["% Change"]))
  )

  // Sort the data by % Change in ascending order
  const sortedData = filteredData.sort(
    (a, b) =>
      parseFloat(a["% Change"].replace(/,/g, "")) -
      parseFloat(b["% Change"].replace(/,/g, ""))
  )

  // Return the top 10 losers
  return sortedData.slice(0, 10)
}

// Export the functions
module.exports = {
  getTop10Gainers,
  getTop10Losers,
}
