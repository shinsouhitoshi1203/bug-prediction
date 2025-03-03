import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import TestPage from "../pages/TestPage";
import Error404 from "../pages/Error/404";
import HelpPage from "../pages/Help";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "help", element: <HelpPage /> },
			// { path: "test", element: <TestPage /> },
			{ path: "*", element: <Error404 /> }
		]
	}
]);
export default router;
