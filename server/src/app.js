console.log('start server!')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: `${req.query.id}!! Hello World`
  })
})

app.get('/status/:id', (req, res) => {
    res.send({
      message: `Path variable is ${req.params.id}!! `
    })
  })

  

app.post('/register', (req, res) => {
    console.log(req.body)
    var email  = req.body.email;
    console.log(email);
    res.send({
      message: `Hello ${email}! Your user was registered!`
    })
})
  


app.listen(process.env.PORT || 8081)
