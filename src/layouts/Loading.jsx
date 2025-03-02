import { CircularProgress } from "@mui/material";

function Loading({ process }) {
	return (
		<div className="my-10">
			<div className="wrapper grid justify-items-center gap-4">
				<CircularProgress color="success" />
				<p>
					Bà con chờ trong giây lát.{" "}
					{process && `Hiện đang lấy về ${process}.`}
				</p>
			</div>
		</div>
	);
}
export default Loading;
