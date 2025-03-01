import PestControlIcon from "@mui/icons-material/PestControl";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
function QuickPrediction({ pest_list }) {
	return (
		<>
			{pest_list &&
				pest_list.map(({ name, type }, index) => (
					<li key={index} className="tags bg-primary/20">
						<div className="font-medium flex items-center gap-2">
							{type == "pest" ? (
								<PestControlIcon />
							) : (
								<CoronavirusIcon />
							)}
							{name}
						</div>
					</li>
				))}
		</>
	);
}
export default QuickPrediction;
