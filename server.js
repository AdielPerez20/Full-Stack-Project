const express = require('express'); //to using express framework
const mongoose = require ('mongoose'); //to using mongoDB
const bodyParser = require('body-parser');

const users = require('./routes/api/users'); 
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// DB config - to get the key from keys.js file
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//request  & response
app.get('/', (req,res) => res.send('naor'));
//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
//setting a port
const port = process.env.PORT || 5000;
//connect to server 
app.listen(port, () => console.log('Server runing on port 5000'));
