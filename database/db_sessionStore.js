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
    createDatabaseTable: true,
    clearExpired: true,
    checkExpirationInterval: 900000, // every 15min
    endConnectionOnClose: true,
    schema: {
		tableName: process.env.DB_TABLE,
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
};

const sessionStore = new MySQLStore(options);

export default sessionStore;
