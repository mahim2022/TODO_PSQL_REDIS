import { Input } from "../Input/input";
import { Container, Paper, TextField } from "@mui/material";
import { TodoDisplay } from "../TodoDisplay/TodoDisplay";
import { useState } from "react";
import { Banner } from "../Banner/Banner";

export const Main = () => {
	const [edit, setEdit] = useState({ todo_id: false, decription: "" });
	const [todoCounter, setTodoCounter] = useState(true);
	return (
		<Container>
			<Paper elevation={10} style={{ padding: "5px" }}>
				<Banner></Banner>
				<Input
					changeEdit={setEdit}
					useEdit={edit}
					todoCounter={todoCounter}
					setTodoCounter={setTodoCounter}
				></Input>
				<TodoDisplay
					useEdit={edit}
					changeEdit={setEdit}
					todoCounter={todoCounter}
					setTodoCounter={setTodoCounter}
				></TodoDisplay>
			</Paper>
		</Container>
	);
};
