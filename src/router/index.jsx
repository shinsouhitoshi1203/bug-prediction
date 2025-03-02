import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import TestPage from "../pages/TestPage";

const router = createBrowserRouter([
	{ path: "*", element: <div>404 Not Found</div> },
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "help", element: <div>Help</div> },
			{ path: "test", element: <TestPage /> }
		]
	}
]);
export default router;
