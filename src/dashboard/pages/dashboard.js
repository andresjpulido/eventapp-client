import React from "react";
import photo from "../../assets/images/map.jpeg";

export default function dashboard() {
	return (
		<section className="page">
			<div className="header-page">
				<h1>Dashboard</h1>
				<span>home > Dashboard</span>
			</div>
			<div>
				<h2>Today</h2>
				<div className="section">
					<div>
						<img src={photo} alt="profile" className="header-image" />
					</div>
					<div className="items">
						<div>Meetup en "THE EMPIRE" Primer y Tercer miércoles del mes.</div>
						<div>
							Wed, Apr 20 · 7:00 PM NZST Meetup en "THE EMPIRE" Primer y Tercer
							miércoles del mes.
						</div>
						<div>
							Group name:The Auckland Spanish Language Meetup Group
							(Conversational)
						</div>
						<div>9 attendees</div>
					</div>
				</div>
			</div>
			<p></p>
			<p>My next events</p>
			<p>Organized by me</p>
		</section>
	);
}
