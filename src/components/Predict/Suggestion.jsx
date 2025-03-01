import { memo } from "react";
import Tooltips from "../Tooltips";

function Suggestion({ suggestion }) {
	console.log(suggestion);
	return (
		<ul className="list-suggestion flex flex-wrap gap-2">
			{suggestion.length > 0 &&
				suggestion.map((item) => {
					return (
						<Tooltips title={item} key={item}>
							<li className="flex items-center gap-2 bg-primary/30 rounded-full px-4 text-primary max-w-full line-clamp-1">
								<span className="max-w-full line-clamp-1">
									{item}
								</span>
							</li>
						</Tooltips>
					);
				})}
		</ul>
	);
}
export default memo(Suggestion);
