import { deleteTodo, getAllTodos } from "../Api/Api";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "@mui/system";
import { Paper, Typography, Button } from "@mui/material";

export const TodoDisplay = ({
	changeEdit,
	useEdit,
	todoCounter,
	setTodoCounter,
}) => {
	const [data, setdata] = useState("");
	useEffect(() => {
		const getAll = async () => {
			const result = await getAllTodos();
			setdata(result);
		};
		getAll();
	}, [todoCounter]);

	const edit = ({ todo_id, description }) => {
		changeEdit({ todo_id: todo_id, description: description });
	};

	const onDelete = async (id) => {
		const res = await deleteTodo(id);
		setTodoCounter(!todoCounter);
	};

	return (
		<Container>
			{data ? (
				data.map((cur) => {
					return (
						<Paper
							elevation={10}
							key={cur.todo_id}
							style={{ marginBottom: "10px", marginTop: "10px" }}
						>
							<Typography>
								{cur.todo_id}/{"      "}
								{cur.description}
							</Typography>
							<Button onClick={() => edit(cur)}>Edit</Button>
							<Button onClick={() => onDelete(cur.todo_id)}>Delete</Button>
						</Paper>
					);
				})
			) : (
				<>Loaading</>
			)}
		</Container>
	);
};
