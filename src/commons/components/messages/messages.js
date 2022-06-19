import React, { useState } from "react";
import "./messages.css";
import AppContext from "../../../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Error() {
	const { message, setMessage } = React.useContext(AppContext);
	const [showDescription, setShowDescription] = useState(false);

	const showDiv = (ev) => {
		setShowDescription(!showDescription);
	};

	if (message)
		return (
			<div className="error" title={JSON.stringify(message)}>
				<div>
					<span className="error-title">Oops!</span>
				</div>
				<div>
					<span className="error-subtitle">Something was wrong!</span>
					{showDescription && (
						<div>
							<div className="error-code">Code {message.code}</div>
							<div className="error-description">
								Description {message.code}
							</div>
						</div>
					)}
				</div>
				<div className="error-link" onClick={showDiv}>
					<FontAwesomeIcon
						icon={["fas", "circle-exclamation"]}
						className="error-icon"
						title="minus"
					/>
				</div>
			</div>
		);
}
