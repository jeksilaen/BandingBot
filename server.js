require('dotenv').config();

const express = require('express');
// const reload = require('reload');
const path = require('path');
const cookieParser = require('cookie-parser');
// const serverless = require('serverless-http');

const homeRouter = require('./src/routes/home.route');
const loginRouter = require('./src/routes/login.route');
const registerRouter = require('./src/routes/register.route');

const app = express();
app.use(cookieParser())

// Request format handlers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(express.raw({ type: "application/vnd.custom-type" }));
// app.use(express.text({ type: "text/html" }));

// EJS view engine initialization
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

// // Serving static assets
app.use(express.static(path.join(__dirname, '/src/public')));


app.use('/', homeRouter);
app.use('/login', loginRouter)
app.use('/register', registerRouter)



// module.exports.handler = serverless(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at ${PORT}`)
});

// reload(app);
