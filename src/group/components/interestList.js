import React from "react";
import "./interestList.css";

export default function InterestList(props) {
	let groups = props.data;

	if (groups === null || !Array.isArray(groups) || groups.length === 0)
		return <div>No interests to show.</div>;

	let change = (name) => {
		//let interest = groups.find(item => findInterest(item, name));

		console.log(name);

		
		//console.log(interest);
	};

	function findInterest(interest, name) {
		return interest.name === name;
	}

	const interestList = groups.map((interest, index) => (
		<div
			key={index}
			className={
				interest.selected ? "interestList-item-selected" : "interestList-item"
			}
			onClick={() => change(interest.name)}
		>
			<div>{interest.name}</div>
		</div>
	));

	return <div className="interestList">{interestList}</div>;
}
