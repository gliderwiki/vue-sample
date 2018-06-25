const AuthenticationController = require('./controller/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)
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

