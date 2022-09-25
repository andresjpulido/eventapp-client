import React, { useEffect, useState } from "react"; 
import AppContext from "../../AppContext"; 
import Breadcrumb from "../../commons/components/breadcrumb";

export default function Interest(props) {
  
  const { loading, setLoading } = React.useContext(AppContext);
	const { user, setuser } = React.useContext(AppContext);
	const { message, setMessage } = React.useContext(AppContext);
  
  return (
    <section className="page ">
      <div className="header-page">
        <h1>Interests</h1>
        <Breadcrumb path="home" />
      </div>
      <div className="home-page"></div>
    </section>
  );
}
