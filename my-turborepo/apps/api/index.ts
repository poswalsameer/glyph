import 'dotenv/config'
import express from 'express'
import generateIconRouter from './routes/generate-icon.route'

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.use(`/api/v1/generate-icon`, generateIconRouter)

app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
