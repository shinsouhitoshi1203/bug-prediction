import { Tooltip } from "@mui/material";

function Tooltips({ children, title }) {
	return (
		<>
			<Tooltip
				title={title}
				classes={{ tooltip: "font-sans" }}
				// sx={{ zIndex: 9999 }}
			>
				{children}
			</Tooltip>
		</>
	);
}
export default Tooltips;
