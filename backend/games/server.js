const express = require('express');
const path = require("path")

app = express()

const lovePath = path.join(__dirname, 'pong/')
app.use(express.static(lovePath, {
  setHeaders: (res) => {
    res.set("Cross-Origin-Opener-Policy", "same-origin")
    res.set("Cross-Origin-Embedder-Policy", "require-corp")
  }
}))

const port = 8000

app.get("/", async (req, res) => {
  res.set("Content-Type", 'text/html')
  res.sendFile(lovePath)
})

app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`)
})