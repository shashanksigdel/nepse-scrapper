document.addEventListener("DOMContentLoaded", function () {
  // Fetch and populate top gainers
  fetch("/api/top-10-gainers")
    .then((response) => response.json())
    .then((data) => {
      const gainersBody = document.getElementById("gainers-body")
      data.forEach((stock) => {
        const row = document.createElement("tr")
        row.innerHTML = `
                 <td>${stock["S.No"]}</td>
                 <td><a href="${stock["Symbol"].href}" target="_blank">${stock["Symbol"].text}</a></td>
                 <td>${stock["LTP"]}</td>
                 <td>${stock["Point Change"]}</td>
                 <td>${stock["% Change"]}</td>
                 <td>${stock["Open"]}</td>
                 <td>${stock["High"]}</td>
                 <td>${stock["Low"]}</td>
                 <td>${stock["Volume"]}</td>
                 <td>${stock["Prev. Close"]}</td>
             `
        gainersBody.appendChild(row)
      })
    })

  // Fetch and populate top losers
  fetch("/api/top-10-losers")
    .then((response) => response.json())
    .then((data) => {
      const losersBody = document.getElementById("losers-body")
      data.forEach((stock) => {
        const row = document.createElement("tr")
        row.innerHTML = `
                 <td>${stock["S.No"]}</td>
                 <td><a href="${stock["Symbol"].href}" target="_blank">${stock["Symbol"].text}</a></td>
                 <td>${stock["LTP"]}</td>
                 <td>${stock["Point Change"]}</td>
                 <td>${stock["% Change"]}</td>
                 <td>${stock["Open"]}</td>
                 <td>${stock["High"]}</td>
                 <td>${stock["Low"]}</td>
                 <td>${stock["Volume"]}</td>
                 <td>${stock["Prev. Close"]}</td>
             `
        losersBody.appendChild(row)
      })
    })
})
