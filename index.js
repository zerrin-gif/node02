const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => res.render('index.pug'))
app.get('/', (req, res) => res.render('index',{name:'Annetta',phone:'(301) 872-0524'}))
app.get('/home',(request,response)=>{response.render('home.pug')})
app.get('/contact',(req,res)=>{res.render('contact')})

app.listen(port, () => console.log(`Example app listening on port port!`))