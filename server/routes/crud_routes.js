import express from "express";
import { todoCache } from "../middleware/cache.js";
import {
	create,
	getAll,
	getOne,
	update,
	deleteTodo,
} from "../query_functions/crud_functions.js";

export const crudRoutes = express.Router();

crudRoutes.post("/", create);
crudRoutes.get("/", todoCache, getAll);
crudRoutes.get("/:id", getOne);
crudRoutes.put("/:id", update);
crudRoutes.delete("/:id", deleteTodo);

// export default crudRoutes;
