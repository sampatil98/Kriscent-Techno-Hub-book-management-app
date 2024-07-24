const express = require('express')
const app = express()
const Routes = require('./routes/index')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const connection=require("./config/db");
require('dotenv').config();
const {requestLogger} = require('./middleware/requestlogger');

app.use(express.json());
app.use(cors());
app.use(requestLogger);

// Swagger documentation
const swaggerDocument = require('./helpers/Book-library-APIs-V1.0.0.json');
const options = {
    swaggerOptions: {
      validatorUrl: null,
    },
  };


app.use(Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(process.env.port,async ()=>{
    try{
        await connection;
        console.log("connected to DB");
        console.log(`server is running at port ${process.env.port}...`);
    }catch(err){
        console.log(err);
    }
})


