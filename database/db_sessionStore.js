import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

import MySQLSession from 'express-mysql-session';




const MySQLStore = MySQLSession(session);

const options = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'finance_tracker',
    table: process.env.DB_TABLE // Hier definierst man, dass die Sessions in der `sessions` Tabelle gespeichert werden
};

const sessionStore = new MySQLStore(options);

export default sessionStore;
