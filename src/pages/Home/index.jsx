import Loading from "../../layouts/Loading";
import useStore from "../../store/useStore.cjs";
import Form from "./Form";
import Success from "./Success";

function Home() {
	const status = useStore((state) => state.status);
	return (
		<>
			<div className="my-5 md:my-20">
				<Form />
			</div>
			<div className="my-10">
				{status == "wait" ? (
					<Loading />
				) : status == "success" ? (
					<Success />
				) : status == "error" ? (
					<Success />
				) : null}
			</div>
		</>
	);
}
export default Home;
