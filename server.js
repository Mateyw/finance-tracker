// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Create a new express application
import express from 'express';
const app = express();

import path from 'path';
import {fileURLToPath} from 'url';

// Import session library
import session from 'express-session';

// Import custom routes
import indexRoutes from './routes/index.js';
import dashboardRoutes from './routes/dashboard.js';
import transactionsRoutes from './routes/transactions.js';
import loginRoutes from './routes/login.js';
import registerRoutes from './routes/register.js';
import addTransactionRoutes from './routes/addTransaction.js';
import logoutRoutes from './routes/logout.js';
import checkSessionState from './routes/session.js';
import impressumRoutes from './routes/impressum.js';
import termsAndConditionsRoutes from './routes/termsAndConditions.js';
import policyRoutes from './routes/policy.js';
import contactRoutes from './routes/contact.js';
import profileRoutes from './routes/profile.js';
import transactionAPIRoutes from './routes/transactionAPI.js';
import errorRoutes from './routes/404.js';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS and the views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Middleware to parse JSON data
app.use(express.json());

// Use session middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 30 * 1000, // 30 minutes
            httpOnly: true,
            secure: false // Set to true in production with HTTPS
        }
    })
);

// Routes
app.use(indexRoutes);
app.use(dashboardRoutes);
app.use(transactionsRoutes);
app.use('/api',transactionAPIRoutes);
app.use(loginRoutes);
app.use(registerRoutes);
app.use(addTransactionRoutes);
app.use(logoutRoutes);
app.use(checkSessionState);
app.use(impressumRoutes);
app.use(termsAndConditionsRoutes);
app.use(policyRoutes);
app.use(contactRoutes);
app.use(profileRoutes);
app.use(errorRoutes);

const PORT = process.env.PORT || 8000;

// Start server on specified port
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});
