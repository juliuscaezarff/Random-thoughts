const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//receive reply from body
app.urlencoded({
  body.json()
})

conn
  .sync()
  .then(() => {
    app.listen(8080)})
  .catch(err => console.log(err))
