import React, { useState, useEffect } from "react";
import AppContext from "../../../AppContext";
import Chat from "./chat";
import ChatInput from "./chatinput";
import "./chatBox.css";
import avatar from "../../../assets/images/mars.jpg";

export default function ChatBox(props) {
	let socket = props.socket;

    const { user, setuser } = React.useContext(AppContext);

	if (socket && user && user.name )
		return (
             
			<div className="chat-container">
				<div className="chat-container-head">
					<img src={avatar} alt={socket.id} className="avatar" />
					<div className="name">user</div>
				</div>
				<div>
					<Chat socket={socket} />
					<ChatInput socket={socket} />
				</div>
			</div>
            
		);
	else return <div></div>;
}
