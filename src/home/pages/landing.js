import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext";
import "./home.css";
import people from "../../assets/images/people.jpg";
import logo from "../../assets/images/logoOff.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headerlanding from "../components/header-landing";

export default function Public() {
  const [events, setEvents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { loading, setLoading, message, setMessage } =
    React.useContext(AppContext);

  let history = useNavigate();
  let url = process.env.REACT_APP_URL_EVENTS;
  let urlgroups = process.env.REACT_APP_URL_GROUPS;

  let search = async (query) => {
    setLoading(true);

    const res = await fetch(url + query).catch((error) => {
      setEvents(null);

      setMessage({});
    });

    if (res) {
      const data = await res.json();
      setEvents(data);
    }
    setLoading(false);
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

  useEffect(() => {
    search("");
    getGroups();
  }, [url]);

  return (
    <section className="page">
      <Headerlanding />
      
      <h1>Welcome!</h1>
      <div className="notes">
        <div className="note">
          <h2>WHAT IS EVENTAPP?</h2>
          <p>
            EventApp is an community to share events, please check the events in
            your city or login and participate.
          </p>
        </div>
        <div
          className="note note-img"
          style={{
            backgroundImage: `url(${people})`,
            backgroundRepeat: "no-repeat",
            width: "250px",
            height: "250px",
          }}
        ></div>
        <div className="note">
          <p>
            Crea tus propios eventos o juntate con gente que comparte tus mismas
            espectativas.
          </p>
          <div
            style={{
              backgroundImage: `url(${logo})`,
              backgroundRepeat: "no-repeat",
              width: "25px",
              height: "25px",
            }}
          ></div>
        </div>
        <div className="note-h1">
          <div className="note-header">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "30px",
                height: "30px",
                fill: "white",
              }}
            />
            ####################
          </div>
          <p>Las categorias mas solicitadas. morado</p>
        </div>
         
        <div className="note-h2">
          <p>Las categorias mas solicitadas.</p>
        </div>
        <div className="note">
          <h2>TITLE</h2>
          <div className="note-columns">
            <div className="note-h1">
              <p>Las categorias mas solicitadas.</p>
            </div>
            <div className="note-h2">
              <p>Las categorias mas solicitadas.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="note-columns">
        <FontAwesomeIcon
          icon={["fas", "baseball"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "bicycle"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-graduate"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-pen"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-doctor"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-music"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "wheelchair-move"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-tie"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "users"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "baby"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-astronaut"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "bed"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "child"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-group"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-gear"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "users-rays"]}
          className="background"
          title="minus"
        />
        <FontAwesomeIcon
          icon={["fas", "user-shield"]}
          className="background"
          title="minus"
        />
      </div>
    </section>
  );
}
