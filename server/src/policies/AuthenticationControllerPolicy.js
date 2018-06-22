const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string(),
            password : Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)


        if (error) {
            switch (error.details[0].context.key) {
                case 'email' :
                    res.status(400).send({
                        error : 'You must provide a valid email address'
                    })
                    break
                case 'password' :
                    res.status(400).send({
                        error : `The password provided failed to match the following rule 
                                    <br> 1. characters, <br>2. at least 8 `
                    })
                    break
                default :
                    res.status(400).send({
                        error: 'Invalid registration'
                    })

            }

        } else {
            next()
        }
    }

}