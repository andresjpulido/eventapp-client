import React, { useEffect, useState, useRef } from "react";
import "./map.css";

export default function Map({ center, zoom, style }) {
	const ref = useRef();
 
	useEffect(() => {
		new window.google.maps.Map(ref.current, {
			center,
			zoom 
		});
	});

	console.log(ref)

	return <div ref={ref} id="map" style={style} />;
}
