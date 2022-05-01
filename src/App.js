/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./commons/components/header";
import Home from "./commons/pages/home";
import Footer from "./commons/components/footer";
import Menu from "./commons/components/menu";
import DashboardPage from "./dashboard/pages";
import SignupPage from "./auth/pages/signup";
import LoginPage from "./auth/pages/login";


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
 
	return (
		<AppProvider>
			<div className="App">
				<BrowserRouter>
					<div className= "content" >
						 
						<Menu />
						<div>
							<Header />
							<div className="app">
								<Routes>
									<Route path="/" element={<LoginPage />} exact />
									<Route path="/login" element={<LoginPage />} exact />
									<Route path="/signup" element={<SignupPage />} exact />
									<Route path="/dashboard" element={<DashboardPage />} exact />

									<Route path="/users" exact element={<UsersPage />} />
									<Route path="/user" exact element={<UserPage />} />
									<Route path="/user/:id" exact element={<UserPage />} />

									<Route element={<Home />} />
								</Routes>
								 
							</div>
						</div>
					</div>
					<Loading />
					
					<Footer />
				</BrowserRouter>
			</div>
		</AppProvider>
	);
}

export default App;
