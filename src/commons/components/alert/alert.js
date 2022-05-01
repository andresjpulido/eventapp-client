import React, { useState } from "react";
import AppContext from "../../../AppContext";
import "./alert.css";

export default function Alert() {
	const { alert, setAlert } = React.useContext(AppContext);

	return <div>{alert}</div>;
}
