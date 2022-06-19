import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../AppContext";
import Breadcrumb from "../../commons/components/breadcrumb";
import { useHistory } from "react-router-dom";
import GroupEventList from "../../group/components/groupEventList";
import InterestList from "../../group/components/interestList";

export default function Event() {
	const [form, setForm] = useState({ description: "" });
	const [groups, setGroups] = useState([]);
	const [interests, setInterests] = useState(null);
	const { user, setuser } = React.useContext(AppContext);
	const [error, setError] = useState(null);
	const { loading, setLoading } = React.useContext(AppContext);

	let history = useNavigate();

	let { id } = useParams();
	let url = process.env.REACT_APP_URL_EVENTS;
	let urlgroups = process.env.REACT_APP_URL_GROUPS;
	let urlInterests = process.env.REACT_APP_URL_INTERESTS;

	let search = async (id) => {
		setLoading(true);

		const res = await fetch(url + "/" + id).catch((error) => {
			console.log(error);
		});

		if (res) {
			const data = await res.json();
		}
		setLoading(false);
	};

	let handleSubmit = (ev) => {};

	let handleGoBack = () => {
		history(-1);
	};

	const onChange = (ev) => {
		ev.persist();
		setForm((form) => ({ ...form, [ev.target.name]: ev.target.value }));
	};

	let getGroups = async () => {
		setLoading(true);

		const res = await fetch(urlgroups).catch((error) => {
			setGroups(null);
			//{				error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" },			}
		});

		if (res) {
			const data = await res.json();
			setGroups(data);
		}
		setLoading(false);
	};

	let getInterest = async () => {
		setLoading(true);

		const res = await fetch(urlInterests).catch((error) => {
			setInterests(null);
		});

		if (res) {
			const data = await res.json();
			setInterests(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		getGroups();
		getInterest();
	}, [url]);

	let selectGroup=(name)=>{console.log(name)}

	let groupsList = groups.map((item, index) => {
		return (<div key={index}>
			<input type="checkbox" id="scales" name="scales" />
			<label htmlFor="scales">{item.name}</label>
		</div>);
	});

let updateInterest = (name)=>{
	for (var i = 0; i < interests.length; i++) {
		if (interests[i].name === name) {
			interests[i].selected = true;
			
		} else {
			interests[i].selected = false;
		}
		setInterests(interests);
	}
}

	return (
		<section className="page ">
			<div className="header-page">
				<h1>New Event</h1>
				<Breadcrumb path="home > New event" />
			</div>

			<div>
				Choose one of your groups
				{groupsList}
				<div>
					<button onClick={handleGoBack}>New group</button>
					<div className="form">
						<label htmlFor="name">Name</label>
						<input type="text" value="" name="name" onChange={onChange} />
						<label htmlFor="description">Description</label>
						<input
							type="text"
							value=""
							name="description"
							onChange={onChange}
						/>
						<button onClick={handleGoBack}>Create</button>
					</div>
				</div>
			</div>
			<div>
				Interets
				<InterestList data={interests} update={updateInterest} />
				{JSON.stringify(interests)}
			</div>
			<div className="form">
				<label htmlFor="date">Date event</label>
				<input type="date" value="" name="date" onChange={onChange} />
				<label htmlFor="description">Description</label>
				<input
					type="text"
					value={form.description}
					name="description"
					autoComplete=""
					onChange={onChange}
				/>
				<div>map</div>
				<button onClick={handleGoBack}>back</button>
				{user && user.name && <button onClick={handleSubmit}>Create</button>}
			</div>
		</section>
	);
}
