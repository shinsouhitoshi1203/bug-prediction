import { Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
function Fail({ message }) {
	return (
		<div className=" flex justify-center items-center min-h-[400px]">
			<div className="grid justify-items-center gap-3">
				<div className="h-1/4">
					<ErrorIcon sx={{ fontSize: "170px", color: "red" }} />
				</div>
				<p>Có lỗi xảy ra khi lấy dữ liệu. Xin hãy thử lại sau</p>
				<Button variant="contained" classes={{ root: "font-sans" }}>
					Thử lại lần nữa
				</Button>
			</div>
		</div>
	);
}
export default Fail;
