import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { crudRoutes } from "./routes/crud_routes.js";
import NodeCache from "node-cache";
import { createClient } from "redis";

const PORT = 5000;

const REDIS_PORT = 6379;

const app = express();

export const myCache = new NodeCache({ stdTTL: 30 });

////redis//////Must start server first////
export const redisClient = createClient();

await redisClient.connect(REDIS_PORT);

redisClient.on("error", function (err) {
	assert(err instanceof Error);
	assert(err instanceof AbortError);
	assert(err instanceof AggregateError);

	// The set and get are aggregated in here
	assert.strictEqual(err.errors.length, 2);
	assert.strictEqual(err.code, "NR_CLOSED");
	///quit
	// redisClient.quit();
});

////////////////

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));

/////routes/////
app.use("/todos", crudRoutes);
////////////////
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
app.get("/", (req, res) => {
	res.send("Pern_Todo_App with node and redis cache");
});
