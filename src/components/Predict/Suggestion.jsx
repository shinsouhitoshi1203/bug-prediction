import { memo, useCallback, useState } from "react";
import Tooltips from "../Tooltips";
import summarise from "../../db/suggestion";
import { Backdrop, CircularProgress } from "@mui/material";
import SuggestionTag from "./SuggestionTag";

function Suggestion({ suggestion }) {
	return (
		<>
			<ul className="list-suggestion flex flex-wrap gap-2">
				{suggestion.length > 0 &&
					suggestion.map((item) => {
						return <SuggestionTag key={item} suggest={item} />;
					})}
			</ul>
		</>
	);
}
export default memo(Suggestion);
// {item}
