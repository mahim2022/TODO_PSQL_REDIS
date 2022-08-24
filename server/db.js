import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

const devConfig = {
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE,
};

const proConfig = {
	connectionString: process.env.DATABASE_URL,
	ssl: {
		require: true,
		rejectUnauthorized: false,
	},
};

// export const pool = new Pool(
// 	process.env.NODE_ENV === "production" ? proConfig : devConfig
// );

export const pool = new Pool(proConfig);

// heroku pg:psql -a perntodocached
////access db
