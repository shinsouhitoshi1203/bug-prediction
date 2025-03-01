import Predict from "../../components/Predict";

function FullPrediction({ details }) {
	return (
		<>
			{details ? (
				<>
					{details.map((identity) => (
						<Predict identity={identity} key={identity.name} />
					))}
				</>
			) : (
				<p>Không có dữ liệu</p>
			)}
		</>
	);
}
export default FullPrediction;
