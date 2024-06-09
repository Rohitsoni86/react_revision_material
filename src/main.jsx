import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import UseState from "./Pages/UseState/UseState.jsx";
import UseEffect from "./Pages/UseEffect/UseEffect.jsx";
import TextInputs from "./Pages/TextInputs/TextInputs.jsx";
import RadioInputs from "./Pages/RadioButtons/RadioInputs.jsx";
import SelectDropdown from "./Pages/SelectDropdown/SelectDropdown.jsx";
import Switches from "./Pages/Switches/Switches.jsx";
import CheckBoxes from "./Pages/Checkbox/CheckBoxes.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<HomePage />} />
			<Route path="about" element={<AboutPage />} />
			<Route path="useState" element={<UseState />} />
			<Route path="useEffect" element={<UseEffect />} />
			<Route path="textInputs" element={<TextInputs />} />
			<Route path="radioButtons" element={<RadioInputs />} />
			<Route path="selectMenu" element={<SelectDropdown />} />
			<Route path="switches" element={<Switches />} />
			<Route path="checkBoxes" element={<CheckBoxes />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
