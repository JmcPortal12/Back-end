const express = require('express')
const App = express()
const expressLayouts = require('express-ejs-layouts')
const index = require('./router/index') 

App.set('view engine','ejs')
App.set('views',__dirname+'/views')
App.set('layout','layouts/layout')
App.use(expressLayouts)
App.use(express.static('public'))

App.use('/',index)
App.listen(3001)
