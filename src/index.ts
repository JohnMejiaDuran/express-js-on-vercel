import { httpServerHandler } from 'cloudflare:node'
import express from 'express'

const app = express()

app.use(express.json())

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
          <title>Express on Cloudflare Workers</title>
          <style>
            body { font-family: system-ui, sans-serif; max-width: 48rem; margin: 4rem auto; padding: 0 1rem; }
            nav { display: flex; gap: 1rem; margin-bottom: 2rem; }
            a { color: #f6821f; }
          </style>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/api-data">API Data</a>
          <a href="/healthz">Health</a>
        </nav>
        <h1>Welcome to Express on Cloudflare Workers 🚀</h1>
        <p>This is a minimal Express app running on the Workers runtime.</p>
      </body>
    </html>
  `)
})

app.get('/about', function (req, res) {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>About</title>
      </head>
      <body>
        <h1>About</h1>
        <p>Express served from Cloudflare Workers.</p>
        <a href="/">Back home</a>
      </body>
    </html>
  `)
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(3000)

export default httpServerHandler({ port: 3000 })
