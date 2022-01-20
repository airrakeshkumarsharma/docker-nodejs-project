const express = require('express')

const app = express()

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Welcome to docker nodejs projected" })
})

const port = 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})