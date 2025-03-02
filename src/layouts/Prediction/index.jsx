import { useEffect, useRef, useState } from "react";
import ResultRender from "./ResultRender";
import useStore from "../../store/useStore.cjs";
import Loading from "../Loading";
import Fail from "../Error/Fail";
import store from "../../store/controls";
import Success from "../../pages/Home/Success";

function Prediction({ data }) {
	const [content, setContent] = useState(() => {
		if (store.has.previous) {
			const prediction = store.get.prediction;
			return <ResultRender data={prediction} />;
		}
		return <Loading process="thông tin dự báo" />;
	});
	const predictRef = useRef(false);
	useEffect(() => {
		if (predictRef.current) return;
		const cancelSubscribe = useStore.subscribe(
			(state) => state.status,
			(status) => {
				const { error } = status;
				if (error) {
					setContent(<Fail message={error} />);
					cancelSubscribe();
					return;
				}
				if (store.has.previous) {
					const prediction = store.get.prediction;
					setContent(<ResultRender data={prediction} />);
					cancelSubscribe();
					return;
				}
				const { isLoading } = status;
				if (!isLoading.prediction) {
					const newData = useStore.getState().cache.prediction;
					setContent(<ResultRender data={newData} />);
				} else {
					setContent(<></>);
				}
			}
		);
	}, []);
	return <>{content}</>;
}
export default Prediction;
