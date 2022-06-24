import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
	user: "postgres",
	password: "m8354211m",
	host: "localhost",
	port: 5432,
	database: "perntodo",
});
