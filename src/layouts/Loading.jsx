import { CircularProgress } from "@mui/material";

function Loading() {
	return (
		<div className="my-10">
			<div className="wrapper grid justify-items-center gap-4">
				<CircularProgress color="success" />
				<p>Bà con chờ trong giây lát</p>
			</div>
		</div>
	);
}
export default Loading;
