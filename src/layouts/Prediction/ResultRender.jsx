import FullPrediction from "./FullPrediction";
import QuickPrediction from "./QuickPrediction";
function ResultRender({ data }) {
	const { pest_list, list } = data;

	return (
		<>
			<h2 className="font-subheading">Cảnh báo dịch hại</h2>
			<p>
				Bà con lưu ý những dịch hại sau đây có thể xảy ra trong thời
				gian tới.
			</p>
			<ul className="list-issues flex items-center gap-4 my-4 flex-wrap">
				<QuickPrediction pest_list={pest_list} />
			</ul>
			<div className="grid gap-4 my-8">
				<FullPrediction details={list} />
			</div>
		</>
	);
}
export default ResultRender;
