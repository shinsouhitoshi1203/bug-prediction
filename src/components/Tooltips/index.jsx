import { Tooltip } from "@mui/material";

function Tooltips({ children, title }) {
	return (
		<>
			<Tooltip title={title} classes={{ tooltip: "font-sans" }}>
				{children}
			</Tooltip>
		</>
	);
}
export default Tooltips;
