const userService = require('../service/userService');

async function createUser(req,res){
    console.log("inside createUser controller");
    let body = req.body;
    console.log("body",body);

    try {

        await userService.createNewUser(body).then(function (result) {
            console.log("result:", result)
            res.status(result.statusCode).send(result);
        })
        
    } catch (error) {
        console.error("Error in createUser controller:", error);
        res.status(500).send({
            message: 'Failed',
            error: true,
            errorMessage: 'Internal Server Error',
            statusCode: 500,
            data: {}
        });
    }

    
}

async function loginUser(req,res){
    console.log("inside loginUser controller");
    let body = req.body;
    console.log("body",body);

    try {

        await userService.loginUser(body).then(function (result) {
            console.log("result:", result)
            res.status(result.statusCode).send(result);
        })
        
    } catch (error) {
        console.error("Error in loginUser controller:", error);
        res.status(500).send({
            message: 'Failed',
            error: true,
            errorMessage: 'Internal Server Error',
            statusCode: 500,
            data: {}
        });
    }

    
}

module.exports = {
    createUser,
    loginUser
}