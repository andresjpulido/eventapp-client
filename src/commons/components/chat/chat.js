import React, { useEffect, useState } from "react";

function Chat({ socket }) {
	const [messages, setMessages] = useState({
		user: {
			name: "AAAA",
		},
		value: "ssds",
    time: new Date()
	});

	useEffect(() => {
		const messageListener = (message) => {
			setMessages((prevMessages) => {
				const newMessages = { ...prevMessages };
				newMessages[message.id] = message;
				return newMessages;
			});
		};

		const deleteMessageListener = (messageID) => {
			setMessages((prevMessages) => {
				const newMessages = { ...prevMessages };
				delete newMessages[messageID];
				return newMessages;
			});
		};

		socket.on("message", messageListener);
		socket.on("deleteMessage", deleteMessageListener);
		socket.emit("getMessages");

		return () => {
			socket.off("message", messageListener);
			socket.off("deleteMessage", deleteMessageListener);
		};
	}, [socket]);

 

	return (
		<div className="message-list">
			{[...Object.values(messages)]
				.sort((a, b) => a.time - b.time)
				.map((message, index) => (
					<div
						key={index}
						className="message-container"
						title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
					>
						<span className="user">{message.user?message.user.name:"user"}:</span>
						<span className="message">{message.value}message</span>
						<span className="date">
							{new Date(message.time).toLocaleTimeString()}date
						</span>
					</div>
				))}
		</div>
	);
}

export default Chat;
