import React, { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider(props) {

    const [loading, setLoading] = useState(false);
	const [user, setuser] = useState(null);
	const [alert, setAlert] = useState("");
	const [message, setMessage] = useState(null);

    const value = {loading, setLoading, user, setuser, alert, setAlert, message, setMessage}
 
	return (
		<AppContext.Provider value={value}>
			{props.children}
		</AppContext.Provider>
	);
}
