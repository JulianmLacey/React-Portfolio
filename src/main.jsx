import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import Error from "./pages/error";
import About from "./pages/aboutme";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";

const router = createBrowserRouter([
	{
		path: "/",
		// main layout (wraps the remaining page components)
		element: <App />,
		// https://reactrouter.com/en/main/route/error-element#errorelement
		// When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route errorElement>) and the error made available with useRouteError.
		errorElement: <Error />,
		// An array of Route objects with nested routes on the children property.
		children: [
			{
				index: true,
				element: <About />,
			},
			{
				// https://reactrouter.com/en/main/route/route#path
				// The path pattern to match against the URL to determine if this route matches a URL, link href, or form action.
				path: "/Contact",
				element: <Contact />,
			},
			{
				path: "/Portfolio",
				element: <Portfolio />,
			},
			{
				path: "/Resume",
				element: <Resume />,
			},
		],
	},
]);

// To mount our component onto the DOM, we'll actually render the RouterProvider component, which will hold the state of our browser location -  when the URL matches a certain pattern, a specific page will be shown.
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
