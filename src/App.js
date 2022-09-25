/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header1 from "./commons/components/header1";
import Home from "./commons/pages/home";
import Footer from "./commons/components/footer";

import DashboardPage from "./dashboard/pages";
import SignupPage from "./auth/pages/signup";
import LoginPage from "./auth/pages/login";
import HomePage from "./home/pages/home";
import PublicPage from "./home/pages/public";
import LandingPage from "./home/pages/landing";
import Session from "./auth/components/session";
import Header from "./commons/components/header";
import GroupPage from "./group/pages/group";
import EventPage from "./event/pages/event";
import MyGroupsPage from "./group/pages/mygroups";
import EventGroupPage from "./event/pages/newevent";
import Messages from "./commons/components/messages";
import ConversationPage from "./conversations/pages/conversations";
import ChatBox from "./commons/components/chat/chatBox";
import InterestPage from "./settings/pages/interest";
import PersonalInfoPage from "./settings/pages/personalInfo";
import ProfilePage from "./settings/pages/profile";
import MyEventsPage from "./event/pages/myevents";
import NotificationsPage from "./settings/pages/notifications";

import io from "socket.io-client";
 
/*
import SettingsPage from "./settings/pages/setup";

import ReportsPage from "./reports/pages";
import FeedbackPage from "./feedback/pages";
import ActivitiesPage from "./activity/pages/activitiesPage";
import ActivityPage from "./activity/pages/activityPage";
*/
import UserPage from "./user/pages/user";
import UsersPage from "./user/pages/users";

import AppProvider from "./AppProvider";
import Loading from "./commons/components/loading";

function App() {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const newSocket = io.connect(`http://${window.location.hostname}:4000`);
		setSocket(newSocket);
		return () => newSocket.close();
	}, [setSocket]);

	return (
		<AppProvider>
			<div className="App">
				<BrowserRouter>
					<div className="content">
						<div>
							<Session />

							<Header />
							<div className="app">
								<Routes>
									<Route path="/" element={<LandingPage />} exact />
									<Route path="/login" element={<LoginPage />} exact />
									<Route path="/signup" element={<SignupPage />} exact />
									<Route path="/dashboard" element={<DashboardPage />} exact />
									<Route path="/home" element={<HomePage />} exact />

									<Route path="/group/:id" element={<GroupPage />} exact />
									<Route path="/mygroups" element={<MyGroupsPage />} exact />
									<Route path="/event/:id" element={<EventPage />} exact />
									<Route path="/myEvents" element={<MyEventsPage />} exact />
									<Route path="/newevent" element={<EventGroupPage />} exact />

									<Route
										path="/conversations"
										exact
										element={<ConversationPage />}
									/>

									<Route path="/users" exact element={<UsersPage />} />
									<Route path="/user" exact element={<UserPage />} />
									<Route path="/user/:id" exact element={<UserPage />} />

									<Route path="/settings/interest" exact element={<InterestPage />} />
									<Route path="/settings/personalinfo" exact element={<PersonalInfoPage />} />
									<Route path="/settings/profile" exact element={<ProfilePage />} />
									<Route path="/settings/notifications" exact element={<NotificationsPage />} />

									<Route element={<Home />} />
								</Routes>
								<Messages />
							</div>
						</div>
					</div>
					<Loading />
					<ChatBox socket={socket} />
					<Footer />
				</BrowserRouter>
			</div>
		</AppProvider>
	);
}

export default App;
