// routes/route.js

const express = require("express")
const router = express.Router()
const scrapeService = require("../services/scrapeService")
const top10StocksService = require("../services/top10Stocks")

// Variable to hold cached data
let cachedData = []
let lastFetched = 0

// Function to update cached data
async function updateCachedData() {
  cachedData = await scrapeService.scrapeData()
  lastFetched = Date.now()
}

// Set an interval to refresh the cached data every 5 seconds
setInterval(updateCachedData, 5000)

// Define the route for scraping data
router.get("/live-market", (req, res) => {
  res.json(cachedData) // Return cached data
})

// Define the route for top 10 stocks with highest % change
router.get("/top-10-gainers", (req, res) => {
  const top10Stocks = top10StocksService.getTop10Gainers(cachedData)
  res.json(top10Stocks) // Return top 10 stocks with highest % change
})

// Define the route for top 10 losers with lowest % change
router.get("/top-10-losers", (req, res) => {
  const top10Losers = top10StocksService.getTop10Losers(cachedData)
  res.json(top10Losers) // Return top 10 losers with lowest % change
})

// Initial fetch
updateCachedData()

module.exports = router
