import { Button, IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
function Navigation() {
	const navigate = useNavigate();
	return (
		<div className="my-[20px]">
			<nav className="flex items-center gap-4">
				<Tooltip
					title="Home"
					classes={{ tooltip: "tooltip-fixed" }}
					onClick={() => {
						navigate("/");
					}}
				>
					<IconButton>
						<HomeIcon />
					</IconButton>
				</Tooltip>
				<Tooltip
					title="GitHub"
					classes={{ tooltip: "tooltip-fixed" }}
					onClick={() => {
						window.location.href =
							"https://github.com/shinsouhitoshi1203/bug-prediction";
					}}
				>
					<IconButton>
						<GitHubIcon />
					</IconButton>
				</Tooltip>
			</nav>
		</div>
	);
}
export default Navigation;
