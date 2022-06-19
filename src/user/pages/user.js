import React, { useState, useEffect, Fragment } from "react";
import AppContext from "../../AppContext";
import Breadcrumb from "../../commons/components/breadcrumb";
 

export default function User() {
	const { user, setuser } = React.useContext(AppContext); 
		
	if (user === null) return <div></div>;

	return (
		<section className="page">
			<div className="header-page">
				<h1>Profile</h1>
				<Breadcrumb path="home" />
			</div>

			<div className=" ">
				<h3>{user.name}</h3>
				<div>{user.email}</div>
				{
				(	user.city !== null ) && <div>{user.city.name}, {user.city.region}</div>
				}
				
				<div>Created at {user.createdAt}</div>
				<div>language</div>
				<div>My groups</div>
				<div className="form">
					<label>Password</label>
					<input />
					<label>Repeat password</label>
					<input />
					<button>Update</button>
				</div>
			
			</div>
		</section>
	);
}
