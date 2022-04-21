import React, { useEffect, useState } from "react";
import UserList from "../components/userList";
import Error from "../../commons/components/error";
import SearchUser from "../components/searchUser";
import AppContext from "../../AppContext";

export default function Users() {
	const [users, setUsers] = useState(null); 	 
	const [error, setError] = useState(null);
	const {loading, setLoading} = React.useContext(AppContext);
 
	let url = process.env.REACT_APP_URL_USERS;

	let search = async (query) => {
		setLoading(true);
		
		const res = await fetch(url + query).catch((error) => {
			console.log(error);
			setUsers({
				error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" },
			});
		});

		if (res) {
			const data = await res.json();
			console.log(data);
			setUsers(data);
		}
		setLoading(false);
	};

	useEffect(() => {
		search("");
	}, [url]);

 
	if (users && users.error) {
		return (
			<Error code={users.error.code} message={users.error.message} />
		);
	}
 
	return (
		
		<section className="page">
			<div className="header-page">
				<h1>Users</h1>
			</div>

			<SearchUser search={search} />
			<UserList activities={users} />
			 
		</section>
	);
}