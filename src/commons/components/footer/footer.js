import AppContext from "../../../AppContext";
import React from "react";
import "./footer.css";

export default function Footer() {
	const { user, setuser } = React.useContext(AppContext);

	if (!user) return <div> </div>;

	return <footer>© 2022 EventsApp, Auckland New Zealand</footer>;
}
