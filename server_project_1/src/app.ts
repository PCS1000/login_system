// load up the express framework and body-parser helper
import express from 'express'
import fs from 'fs'
import routes from './routes/routes'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
routes(app, fs)

export default app
