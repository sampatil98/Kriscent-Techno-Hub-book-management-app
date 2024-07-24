const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authentication = function (roles = []) {

    return async (req, res, next) => {
        
    try {
        let token = req.header('Authorization');
        console.log("token",token);
    if (!token) {
       return res.status(401).json({
            message: 'Failed',
            error: true,
            errorMessage: 'Access denied',
            statusCode: 401,
            data: {}
        });
    }
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.secretKey);
        console.log("decoded",decoded);
        if(!decoded || (roles.length && !roles.includes(decoded.role))){
            return res.status(401).json({
                message: 'Failed',
                error: true,
                errorMessage: 'Access denied',
                statusCode: 401,
                data: {}
            });
            
        }else{
            req.user = decoded;
            console.log("req.user",req.user);
            next();
        }
        
    } catch (err) {
        console.error('Token verification error:', err);
        res.status(401).json({
            message: 'Failed',
            error: true,
            errorMessage: err.message,
            statusCode: 401,
            data: {}
        });
    }

    }

    
};
