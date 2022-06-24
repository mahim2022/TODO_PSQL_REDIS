import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const createTodo = async (data) => {
	const res = await api.post("/todos", data);
	return res;
};

export const getAllTodos = async () => {
	const { data } = await api.get("/todos");
	return data;
};

export const deleteTodo = async (id) => {
	const res = await api.delete(`/todos/${id}`);
	return res;
};

export const updateTodo = async (id, data) => {
	const res = await api.put(`/todos/${id}`, data);
	return res;
};
