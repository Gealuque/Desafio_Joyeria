import express from 'express'
import JoyasRouter from './routes/joyasRoute.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(JoyasRouter)

app.listen(PORT, () => {
  console.log(`Server encendido http://localhost:${PORT}`)
})
