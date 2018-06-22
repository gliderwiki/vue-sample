const AuthenticationController = require('./controller/AuthenticationController')
module.exports = (app) => {
    app.post('/register', AuthenticationController.register)
}

//   app.get('/status', (req, res) => {
//     res.send({
//       message: `${req.query.id}!! Hello World`
//     })
//   })
  
//   app.get('/status/:id', (req, res) => {
//       res.send({
//         message: `Path variable is ${req.params.id}!! `
//       })
//     })

//   app.post('/register', (req, res) => {
      
//       var email  = req.body.email;
//       console.log(email);
//       res.send({
//         message: `Hello ${email}! Your user was registered!`
//       })
//   }) 

