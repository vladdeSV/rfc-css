import express from 'express'
import { readdirSync, readFileSync } from 'fs'
import { Converter } from 'showdown'

const app = express()
const showdown = new Converter()
const tempateHtml = readFileSync('./index.html', 'utf-8')

// load all available documents
const availableDocuments = (() => {
  const filenames = readdirSync(__dirname + '/docs').filter(filename => filename.endsWith('.md'))

  const out: Record<string, string> = {}
  for (const filename of filenames) {
    const id = filename.replace('.md', '')
    const content = readFileSync(__dirname + '/docs/' + filename, 'utf-8')
    out[id] = showdown.makeHtml(content)
  }

  return out
})()

function loadDocument(id: string) {
  if (!(id in availableDocuments)) {
    return undefined
  }

  let markdown = availableDocuments[id]
  if (process.env.ENV === 'dev') {
    markdown = readFileSync(__dirname + '/docs/' + id + '.md', 'utf-8')
  }

  const content = showdown.makeHtml(markdown)
  return tempateHtml.replace('{{content}}', content)
}

app.get('/favicon.ico', (_, res) => {
  res.status(404).send()
})

app.get('/rfc.css', (_, res) => {
  res.set('Content-Type', 'text/css')
  res.send(readFileSync('./rfc.css', 'utf-8'))
})

app.get('/custom.css', (_, res) => {
  res.set('Content-Type', 'text/css')
  res.send(readFileSync('./misc/custom.css', 'utf-8'))
})

app.get('/', (_, res) => {
  res.set('Content-Type', 'text/html').send(loadDocument('landing'))
})

app.get('/:id', (req, res) => {
  const id = req.params.id

  const html = loadDocument(id)
  if (html === undefined) {
    return res.status(404).send()
  }

  return res.set('Content-Type', 'text/html').send(html)
})

app.get('/:id/raw', (req, res) => {
  const id = req.params.id

  console.log(id)

  return res.sendFile(__dirname + '/docs/' + id + '.md')
})

app.listen(3000, () => {
  console.log('listening on port http://localhost:3000')
})
