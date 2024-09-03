const express = require("express")
const path = require("path")
const app = express()

require("dotenv").config()
const port = process.env.PORT || 3000

// Import routes
const routes = require("./routes/router")

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")))

// Use routes
app.use("/api", routes)

// Serve a simple HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
