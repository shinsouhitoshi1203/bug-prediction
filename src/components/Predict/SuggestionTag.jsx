import { Backdrop, Button, IconButton, Tooltip } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import Tooltips from "../Tooltips";
import summarise from "../../db/suggestion";
import CloseIcon from "@mui/icons-material/Close";
function SuggestionTag({ suggest }) {
	const header = summarise(suggest);
	const suggestData = useRef({ header, description: suggest });
	const [explain, setExplain] = useState(false);
	const handleExplain = useCallback(() => {
		setExplain((x) => !x);
	}, []);
	return (
		<>
			<Backdrop
				open={explain}
				onClick={handleExplain}
				sx={{ zIndex: 900 }}
			>
				<article
					className="dialog"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex justify-between items-center">
						<h4 className="font-subheading">
							{suggestData.current.header}
						</h4>

						<Tooltips title="Đóng">
							<IconButton>
								<CloseIcon onClick={handleExplain} />
							</IconButton>
						</Tooltips>
					</div>
					<p className="font-body mt-[12px]">
						{suggestData.current.description}
					</p>
					<div className="flex justify-end absolute right-4 bottom-4 md:relative md:right-0 md:bottom-0 md:mt-[36px]">
						<Button
							variant="contained"
							onClick={handleExplain}
							classes={{ root: "font-sans text-md" }}
						>
							Quay lại
						</Button>
					</div>
				</article>
			</Backdrop>
			<Tooltips title="Xem chi tiết">
				<li
					className="flex items-center gap-2 bg-primary/30 hover:bg-primary/50 rounded-full px-4 text-primary max-w-full line-clamp-1 transition-[background_.3s] cursor-pointer"
					onClick={handleExplain}
				>
					<span className="max-w-full line-clamp-1">{header}</span>
				</li>
			</Tooltips>
		</>
	);
}
export default SuggestionTag;
