import { myCache, redisClient } from "../index.js";

export const todoCache = async (req, res, next) => {
	const data = myCache.get("todos");
	const redisData = await redisClient.get("todos"); ////this data is stringified
	if (redisData != null) {
		res.send(redisData); //since already string no need to send json
		console.log(`redis cache`);
	} else if (data != null) {
		res.status(200).json(data);
		console.log(`node cache`);
	} else next();
};
