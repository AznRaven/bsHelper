// Load express
const express = require('express')
// Load cors
const cors = require('cors')
// Setup our Express app
const app = express()
// Set PORT
const PORT = 8080

// Add Routes
const bsHelperRoutes = require('./routes/bsHelperRoutes')

app.use(express.json())
app.use(cors())

// Use Routes
app.use('/bsHelper', bsHelperRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})