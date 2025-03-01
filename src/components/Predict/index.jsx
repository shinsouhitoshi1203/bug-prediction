import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Tooltip } from "@mui/material";
import { memo, useCallback, useState } from "react";
import Suggestion from "./Suggestion";
import Tooltips from "../Tooltips";
function Predict({ identity }) {
	const { name, description, suggestion } = identity;
	const [openDescription, setOpenDescription] = useState(false);
	const handleDescription = useCallback(() => {
		setOpenDescription((x) => !x);
	}, []);

	return (
		<>
			<section className="bg-primary/10 p-4 rounded-2xl">
				<div className="flex items-center gap-2 justify-between  flex-wrap">
					<h3 className="font-medium">{name}</h3>
					<Tooltips
						title={
							openDescription ? "Ẩn đi" : "Hiện mô tả sâu bệnh"
						}
					>
						<IconButton onClick={handleDescription}>
							{openDescription ? <CloseIcon /> : <InfoIcon />}
						</IconButton>
					</Tooltips>
				</div>
				{openDescription && (
					<p className="font-body  italic my-[12px]">{description}</p>
				)}
				<p className="italic text-sm mb-2 mt-3">Bà con nên: </p>
				<Suggestion suggestion={suggestion} />
			</section>
		</>
	);
}
export default memo(Predict);
