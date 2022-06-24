import { Container, Paper, Typography } from "@mui/material";

export const Banner = () => {
	return (
		<Container style={{ marginBottom: "10px" }}>
			<Paper
				elevation={10}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "black",
				}}
			>
				<Typography style={{ color: "white" }} variant="h5">
					Cached PSQL TODO-APP
				</Typography>
			</Paper>
		</Container>
	);
};
