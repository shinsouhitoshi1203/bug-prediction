import { Outlet } from "react-router-dom";
import Navigation from "./layouts/Navigation";
// mui base
function App() {
	return (
		<div className="App">
			<div className="container mx-auto px-4 sm:px-[48px] max-w-[1280px]">
				<Navigation />
				<div className="title flex items-center justify-center gap-8 md:mt-10 sm:mt-10 ">
					<img
						src="./favicon.png"
						alt="Dự báo sâu bệnh cây lúa"
						className="hidden md:block md:size-16"
					/>
					<strong className="font-big">
						Dự báo sâu bệnh cây lúa
					</strong>
				</div>
				<div className="min-h-[calc(100vh-400px)]">
					<Outlet />
				</div>
				<footer className="flex items-center justify-center py-8">
					<div className="max-w-[600px] text-center">
						<p>
							Công cụ này dùng dữ liệu có sẵn từ weatherstack,
							được dự báo bởi AI. Kết quả thực tế có thể khác với
							dự báo.
						</p>
						<p className="mt-2">
							{/* Copyright (c) */}
							made w/ ❤️ by{" "}
							<a
								href="https://github.com/shinsouhitoshi1203/"
								target="_blank"
								rel="noreferrer"
								className="hover:text-input"
							>
								shinsouhitoshi1203
							</a>
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}
export default App;
