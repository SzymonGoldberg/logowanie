//https://www.topcoder.com/thrive/articles/authentication-and-authorization-in-express-js-api-using-jwt

const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  userRoutes = require("./routes/user"),
  cors = require("cors");

require("dotenv").config();

app.use(cors());

//Connect to database
try {
  mongoose.connect("mongodb+srv://developer:W3SAcHumBleyv5yn@pki-zadanie.mrsv1dq.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 1000
  });
  console.log("connected to db");
} catch (error) {
  handleError(error);
}
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

//using user route
app.use(userRoutes);

//setup server to listen on port 8080
app.listen(process.env.PORT, () => {
  console.log("Server is live on port" + process.env.PORT);
})