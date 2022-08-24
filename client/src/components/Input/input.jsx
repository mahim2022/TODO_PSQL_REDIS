import { Button, Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { createTodo, updateTodo } from "../Api/Api";

export const Input = ({ changeEdit, useEdit, setTodoCounter, todoCounter }) => {
	const [data, setData] = useState({ description: "" });

	useEffect(() => {
		if (useEdit.description) {
			setData({ description: useEdit.description });
		}
	}, [useEdit]);

	const submit = async () => {
		if (data.description !== null) {
			if (useEdit.todo_id) {
				const result = await updateTodo(useEdit.todo_id, data);
				if (result.status === 200) {
					setTodoCounter(!todoCounter);
				}
			} else {
				// const res = await createTodo(data);
				// if (res.status === 200) {
				// 	setTimeout(setTodoCounter(!todoCounter), 4000);
				// }
				createTodo(data).then((res) => {
					if (res.status === 200) {
						setTodoCounter(!todoCounter);
					}
				});
			}
			setData({ description: "" });
			changeEdit({ todo_id: false, decription: "" });
		}
	};

	const onType = (e) => {
		setData({ description: e.target.value });
	};

	return (
		<Container>
			<Typography>Add todos</Typography>
			<TextField
				id="outlined-basic"
				label="Description"
				variant="outlined"
				value={data.description}
				onChange={onType}
			/>
			<Button
				style={{ marginLeft: "3px" }}
				variant="contained"
				onClick={submit}
				onSubmit={submit}
			>
				Submit
			</Button>
		</Container>
	);
};
