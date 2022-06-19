import React, { useState } from "react";

const ChatInput = ({ socket }) => {
	const [value, setValue] = useState("");
	const submitForm = (e) => {
		e.preventDefault();
		socket.emit("message", value);
		console.log("message", value);
		setValue("");
	};

	return (
		<form onSubmit={submitForm}>
			<input
				autoFocus
				value={value}
				placeholder="Type your message"
				onChange={(e) => {
					setValue(e.currentTarget.value);
				}}
			/>
		</form>
	);
};

export default ChatInput;
