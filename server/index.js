import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { crudRoutes } from "./routes/crud_routes.js";
import NodeCache from "node-cache";
// import { createClient } from "redis";
import "dotenv/config";

const PORT = process.env.PORT;

// const REDIS_PORT = 6379;

const app = express();

////redis//////Must start server first////
// export const redisClient = createClient();

// await redisClient.connect(REDIS_PORT);

// redisClient.on("error", function (err) {
// 	assert(err instanceof Error);
// 	assert(err instanceof AbortError);
// 	assert(err instanceof AggregateError);

// 	// The set and get are aggregated in here
// 	assert.strictEqual(err.errors.length, 2);
// 	assert.strictEqual(err.code, "NR_CLOSED");
// 	///quit
// 	// redisClient.quit();
// });

////////////////

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

export const myCache = new NodeCache({ stdTTL: 30 });

/////routes/////
app.use("/todos", crudRoutes);
////////////////

app.get("/", (req, res) => {
	res.send("Pern_Todo_App with node and redis cache");
});

app.listen(PORT, () => {
	console.log(
		`App listening on port ${PORT} && NODE_ENV:${process.env.NODE_ENV}`
	);
});
