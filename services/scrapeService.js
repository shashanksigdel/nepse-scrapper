const axios = require("axios")
const cheerio = require("cheerio")

// URL of the page to scrape
const url = "https://www.sharesansar.com/live-trading"

// Function to scrape the data
async function scrapeData() {
  try {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)

    // Extract headers
    const headers = []
    $("thead th").each((i, element) => {
      headers.push($(element).text().trim())
    })

    // Extract row data
    const rows = []
    $("tbody tr").each((i, row) => {
      const rowData = []
      $(row)
        .find("td")
        .each((j, cell) => {
          const link = $(cell).find("a")
          if (link.length) {
            rowData.push({
              text: link.text().trim(),
              href: link.attr("href"),
            })
          } else {
            rowData.push($(cell).text().trim())
          }
        })
      rows.push(rowData)
    })

    // Combine headers with row data
    const dataWithHeaders = rows.map((rowData) => {
      let rowObject = {}
      rowData.forEach((data, index) => {
        rowObject[headers[index]] = data // Map header to corresponding data
      })
      return rowObject
    })

    return dataWithHeaders
  } catch (error) {
    console.error("Error scraping data:", error)
    return []
  }
}

module.exports = { scrapeData }
