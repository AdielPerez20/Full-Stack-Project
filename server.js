const express = require('express'); //to using express framework
const mongoose = require ('mongoose'); //to using mongoDB

const app = express();

// DB config - to get the key from keys.js file
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//request  & response
app.get('/', (req,res) => res.send('Hello'));
//setting a port
const port = process.env.PORT || 5000;
//connect to server 
app.listen(port, () => console.log('Server runing on port 5000'));