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
		console.log("refresh");
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
							style={{
								marginBottom: "10px",
								marginTop: "10px",
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<div>
								<Typography>
									{cur.todo_id}/{"      "}
									{cur.description}
								</Typography>
							</div>
							<div>
								<Button
									variant="contained"
									onClick={() => edit(cur)}
									style={{ marginRight: "5px" }}
								>
									Edit
								</Button>
								<Button
									variant="contained"
									color="error"
									onClick={() => onDelete(cur.todo_id)}
								>
									Delete
								</Button>
							</div>
						</Paper>
					);
				})
			) : (
				<>Loaading</>
			)}
		</Container>
	);
};
