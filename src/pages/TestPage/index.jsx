import { sampleData } from "../../../json/bugs";
import ResultRender from "../../layouts/Prediction/ResultRender";
function TestPage() {
	return (
		<>
			<ResultRender data={sampleData} />
		</>
	);
}
export default TestPage;
