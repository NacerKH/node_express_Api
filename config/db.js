const mongoose = require("mongoose");

mongoose
    .connect( process.env.DB_USER_URL ,
        {
            useNewUrlParser: true,
         useUnifiedTopology: true
         

        }
    )
    .then(() => console.log("Connected to MongoDb"))
    .catch((err) => console.log("Failed to connect to MongoDb", err));