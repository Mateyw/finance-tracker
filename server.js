// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Create a new express application
import express from 'express';
const app = express();

// Import session library
import session from 'express-session';

// Import custom routes
import loginRoutes from './routes/login.js';
import registerRoutes from './routes/register.js';
import dashboardRoutes from './routes/dashboard.js';
import errorRoutes from './routes/404.js';

// Set the view engine to EJS and the views folder
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware to parse URL-encoded data
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Middleware to parse JSON data
app.use(express.json());

// Use session middleware
app.use(
    session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false}, // Set to true if using HTTPS
    }),
);

// Routes
app.use(loginRoutes);
app.use(registerRoutes);
app.use(dashboardRoutes);
app.use(errorRoutes);

const PORT = process.env.PORT || 8000;

// Start server on specified port
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});
