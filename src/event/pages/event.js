import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../AppContext";
import Breadcrumb from "../../commons/components/breadcrumb";
import { useHistory } from "react-router-dom";
import AttendeesList from "../components/attendeesList";
import { Wrapper, Status, Marker } from "@googlemaps/react-wrapper";
import Map from "../components/Map";

export default function Event() {
	const [event, setEvent] = useState({});
	const { user, setuser } = React.useContext(AppContext);
	const [error, setError] = useState(null);
	const { loading, setLoading } = React.useContext(AppContext);

	const [clicks, setClicks] = React.useState([]);
	const [zoom, setZoom] = React.useState(4); // initial zoom
	const [center, setCenter] = React.useState({
		lat: -34.397,
		lng: 150.644,
	});

	let history = useNavigate();

	let { id } = useParams();
	let url = process.env.REACT_APP_URL_EVENTS;

	const render = (status) => {
		if (status === Status.LOADING) return <h3>{status} ..</h3>;
		if (status === Status.FAILURE) return <h3>{status} ...</h3>;
		return null;
	};

	const ref = React.useRef(null);
	const [map, setMap] = React.useState();

	const onIdle = (m) => {
		console.log("onIdle");
		setZoom(m.getZoom());
		setCenter(m.getCenter().toJSON());
	};

	React.useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, {}));
		}
		search(id);
	}, [url, id, ref, map]);

	let search = async (id) => {
		setLoading(true);

		const res = await fetch(url + "/" + id).catch((error) => {
			console.log(error);
			setEvent({
				error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" },
			});
		});

		if (res) {
			const data = await res.json();
			setEvent(data);
		}
		setLoading(false);
	};

	let handleSubmit = (ev) => {};

	let handleGoBack = () => {
		history(-1);
	};

	const style = { flexGrow: "1", height: "250px" };

	if (event.title)
		return (
			<section className="page ">
				<div className="header-page">
					<h1>{event.title}</h1>
					<Breadcrumb path="home > event" />
				</div>

				<h1></h1>
				<h4>
					{event.createdAt} {event.city.name}, {event.city.region}
				</h4>
				<p>{event.description}</p>
				<div>
					<Wrapper
						apiKey={process.env.REACT_APP_URL_GOOGLEMAPS}
						render={render}
					>
						<Map center={center} zoom={zoom} style={style} />
					</Wrapper>
				</div>
				<div>Created by {event.creator.name}</div>
				<div>Attendees:</div>
				<AttendeesList data={event.attendees} />

				<button onClick={handleGoBack}>back</button>

				{user && user.name && <button onClick={handleSubmit}>Join</button>}
			</section>
		);
	else return <div></div>;
}
