import express from 'express'
import path from 'path'

const server = express()

const __dirname = path.dirname(new URL(import.meta.url).pathname)
server.use(express.json())
server.use(express.static(path.join(__dirname, '..', 'public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

export default server
