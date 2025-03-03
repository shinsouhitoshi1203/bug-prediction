import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
function Error404() {
	const navigate = useNavigate();
	const handleBack = useCallback(() => {
		navigate("/");
	}, []);
	return (
		<>
			<div className=" flex justify-center items-center min-h-[400px]">
				<div className="grid justify-items-center gap-3">
					<div className="h-1/4">
						<CancelIcon sx={{ fontSize: "170px", color: "red" }} />
					</div>
					<p>
						Đường link không tồn tại. Bà con kiểm tra lại địa chỉ.
					</p>
					<Button
						variant="contained"
						classes={{ root: "font-sans" }}
						onClick={handleBack}
					>
						Về trang chủ
					</Button>
				</div>
			</div>
		</>
	);
}
export default Error404;
