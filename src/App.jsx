import { Outlet } from "react-router-dom";
import Navigation from "./layouts/Navigation";
// mui base
function App() {
	return (
		<div className="App">
			<div className="container mx-auto px-4 max-w-[1280px]">
				<Navigation />
				<section className="title flex items-center justify-center gap-8 md:mt-20 sm:mt-10 ">
					<img
						src="./favicon.png"
						alt="Dự báo sâu bệnh cây lúa"
						className="hidden md:block md:size-16"
					/>
					<h1 className="font-big">Dự báo sâu bệnh cây lúa</h1>
				</section>

				<Outlet />
			</div>
		</div>
	);
}
export default App;
