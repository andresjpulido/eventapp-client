import React from "react";

const AppContext = React.createContext({
	loading: false,
	setLoading: (t) => {},
	user: null,
	setuser: (t) => {},
	message: null,
	setMessage: (t) => {}
});

export default AppContext;
