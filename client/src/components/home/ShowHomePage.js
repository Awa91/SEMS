import React from "react";
import "../../App.css";
import { NavLink, Link } from "react-router-dom";

function ShowHomePage() {
  return (
    <>
    <div className="ShowList" >
      <div className="container mt-5" >
        <div className="row">
          <div className="col-sm-4">
            <h2 >About XYZ Shipping Company</h2>

            <p className="bodyText"> 
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
            <h3 className="mt-4">Key Events</h3>

            <ul class="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link " style={{color:"black", fontSize:"1em"}}href="#">
                  Safety Drills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{color:"black", fontSize:"1em"}} href="#">
                  Port Operation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link "style={{color:"black", fontSize:"1em"}} href="#">
                  Cargo Operation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{color:"black", fontSize:"1em"}}  href="#">
                  Safety Evening ...
                </a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2>Bridge's PPE</h2>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum co.
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <NavLink
              to="/show-bridge-equipment-list"
              className="btn   float-right"
              style={{ backgroundColor: "#235b8a" , color:"#9dd0c1"}}
            >
              Bridge's PPE
            </NavLink>
            <h2 className="mt-5">Bridge Manuals</h2>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur{" "}
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <Link
              to="/show-bridge-manual-list"
              className="btn  float-right"
              style={{ backgroundColor: "#235b8a", color:"#9dd0c1" }}
            >
              Bridge's PPE
              Manuals
            </Link>
            <h2>Deck's PPE</h2>
            <p className="bodyText">
            Sunt in culpa qui officia deserunt mollit anim id est. 
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <Link
              to="/show-deck-equipment-list"
              className="btn   float-right"
              style={{ backgroundColor: "#235b8a" , color:"#9dd0c1"}}
            >
              Deck's PPE
            </Link>
            <h2 className="mt-5"> Deck's PPE Manuals</h2>
            <p className="bodyText">
            Sunt in culpa qui officia deserunt mollit anim id est.
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <Link
              to="/show-deck-manual-list"
              className="btn   float-right"
              style={{ backgroundColor: "#235b8a" , color:"#9dd0c1"}}
            >
              Deck's PPE Manuals
            </Link>
            
            <h2 className="mt-5"> Engine's PPE</h2>
            <p className="bodyText">
            Sunt in culpa qui officia deserunt mollit anim id est.
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <Link
              to="/show-engine-equipment-list"
              className="btn   float-right"
              style={{ backgroundColor: "#235b8a", color:"#9dd0c1" }}
            >
              Engine's PPE
            </Link>
            <h2 className="mt-5">Engine's PPE Manuals</h2>
            <p className="bodyText">
            Sunt in culpa qui officia deserunt mollit anim id est.
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <Link
              to="/show-engine-manual-list"
              className="btn   float-right"
              style={{ backgroundColor: "#235b8a", color:"#9dd0c1" }}
            >
              Engine's PPE Manuals
            </Link>
            <h2 className="mt-5"> Galley's PPE</h2>
            <p className="bodyText">
            Sunt in culpa qui officia deserunt mollit anim id est.
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <Link
              to="/show-galley-equipment-list"
              className="btn   float-right"
              style={{ backgroundColor: "#235b8a" , color:"#9dd0c1"}}
            >
              Galley's PPE
            </Link>
            <h2 className="mt-5"> Galley's PPE Manuals</h2>
            <p className="bodyText">
            Sunt in culpa qui officia deserunt mollit anim id est.
            </p>
            <p className="bodyText">Some text..</p>
            <p className="bodyText">
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <Link
              to="/show-galley-manual-list"
              className="btn  float-right"
              style={{ backgroundColor: "#235b8a", color:"#9dd0c1" }}
            >
              Galley's PPE Manuals
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ShowHomePage;
