import { pool } from "../db.js";
import { myCache, redisClient } from "../index.js";

export const create = async (req, res) => {
	try {
		const { description } = req.body;
		const newToDo = await pool.query(
			"INSERT INTO toDo (description) VALUES($1) RETURNING *",
			[description]
		);
		res.json(newToDo.rows);
		// console.log(description);
	} catch (error) {
		console.log(error.message);
	}
};

export const getAll = async (req, res) => {
	try {
		const allToDos = await pool.query("SELECT * FROM todo");
		res.status(200).json(allToDos.rows);
		const cache = myCache.set("todos", allToDos.rows);
		redisClient.setEx("todos", 30, JSON.stringify(allToDos.rows));
	} catch (error) {
		console.log(error.message);
	}
};

export const getOne = async (req, res) => {
	try {
		const { id } = req.params;
		const singleTodo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [
			id,
		]);
		res.json(singleTodo.rows);
	} catch (error) {
		console.log(error.message);
	}
};

export const update = async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updatedtodo = await pool.query(
			"UPDATE todo SET description=$1 WHERE todo_id=$2",
			[description, id]
		);
		res.json("Todo updated");
	} catch (error) {
		console.log(error);
	}
};

export const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedTodo = await pool.query("DELETE FROM todo WHERE todo_id=$1", [
			id,
		]);
		res.json("Deletion Successful");
	} catch (error) {
		console.log(error);
	}
};
