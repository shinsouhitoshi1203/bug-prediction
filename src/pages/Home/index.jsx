import { useEffect, useRef, useState } from "react";
import Loading from "../../layouts/Loading";
import useStore from "../../store/useStore.cjs";
import Form from "./Form";
import Success from "./Success";
import store from "../../store/controls";
import form from "../../components/Form/controls";
import Fail from "../../layouts/Error/Fail";
import Bar from "../../components/Bar";

function Home() {
	const homeRef = useRef(false);

	const [content, setContent] = useState(() => (
		<>
			<h1 className="hidden">Dự báo sâu bệnh cây lúa</h1>
		</>
	));

	// selecting case
	useEffect(() => {
		if (homeRef.current) return;
		store.setBack();
		form.enable();
		useStore.subscribe(
			(state) => state.status,
			(status) => {
				const { inDefault, isLoading } = status;
				if (!inDefault) {
					const { weather, prediction } = isLoading;
					const { error } = status;
					if (error != "" && error != "PREDICT_ERROR") {
						setContent(<Fail message={error} />);
						return;
					}
					if (weather) {
						setContent(<Loading />);
					} else {
						if (!weather && prediction) {
							// load the loading then show the full data

							setContent(<Success />);
						} else {
							if (!weather && !prediction) {
								if (!store.has.previous) {
									// day la du lieu moi nhat
									setContent(
										<>
											<Success />
										</>
									);
								} else {
									// day la du lieu da duoc lay truoc do
									setContent(
										<>
											<Bar message="Đây là dữ liệu đã được lấy trước đó" />
											<Success previousData />
										</>
									);
								}
							}
							// set nothing
						}
					}
				} else {
					// error handling or in default?
					const { error } = status;
					if (error != "" && error != "PREDICT_ERROR") {
						setContent(<Fail message={error} />);
						return;
					}
				}
			},
			{ fireImmediately: true }
		);
		homeRef.current = true;
	}, []);

	return (
		<>
			<div className="my-5 md:my-20">
				<Form />
			</div>

			<div className="my-10">{content}</div>
		</>
	);
}
export default Home;
