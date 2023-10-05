import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ShowHomePage from "./components/home/ShowHomePage";
import ShowErrorPage from "./ShowErrorPage";
import CreateBridgeEquip from "./components/bridge/equipment/Create";
import ShowBridgeEquipList from "./components/bridge/equipment/ShowList";
import ShowBridgeEquipDetails from "./components/bridge/equipment/ShowDetails";
import UpdateBridgeEquipInfo from "./components/bridge/equipment/Update";

import CreateBridgeManual from "./components/bridge/manuals/Create";
import ShowBridgeManualList from "./components/bridge/manuals/ShowList";
import ShowBridgeManualDetails from "./components/bridge/manuals/ShowDetails";
import UpdateBridgeManualInfo from "./components/bridge/manuals/Update";

import CreateDeckEquip from "./components/deck/equipment/Create";
import ShowDeckEquipList from "./components/deck/equipment/ShowList";
import ShowDeckEquipDetails from "./components/deck/equipment/ShowDetails";
import UpdateDeckEquipInfo from "./components/deck/equipment/Update";

import CreateDeckManual from "./components/deck/manuals/Create";
import ShowDeckManualList from "./components/deck/manuals/ShowList";
import ShowDeckManualDetails from "./components/deck/manuals/ShowDetails";
import UpdateDeckManualInfo from "./components/deck/manuals/Update";

import CreateEngineEquip from "./components/engine/equipment/Create";
import ShowEngineEquipList from "./components/engine/equipment/ShowList";
import ShowEngineEquipDetails from "./components/engine/equipment/ShowDetails";
import UpdateEngineEquipInfo from "./components/engine/equipment/Update";

import CreateEngineManual from "./components/engine/manuals/Create";
import ShowEngineManualList from "./components/engine/manuals/ShowList";
import ShowEngineManualDetails from "./components/engine/manuals/ShowDetails";
import UpdateEngineManualInfo from "./components/engine/manuals/Update";

import CreateGalleyEquip from "./components/galley/equipment/Create";
import ShowGalleyEquipList from "./components/galley/equipment/ShowList";
import ShowGalleyEquipDetails from "./components/galley/equipment/ShowDetails";
import UpdateGalleyEquipInfo from "./components/galley/equipment/Update";

import CreateGalleyManual from "./components/galley/manuals/Create";
import ShowGalleyManualList from "./components/galley/manuals/ShowList";
import ShowGalleyManualDetails from "./components/galley/manuals/ShowDetails";
import UpdateGalleyManualInfo from "./components/galley/manuals/Update";

const App = () => {
  return (
    <>
      <div >
        <div className="navbar fixed-top" style={{backgroundColor:"#235b8a"}}>
          <Navbar.Brand>
            <Link to={"/"} style={{ color: "#9dd0c1", textDecoration: "none" }}>
              Ship Equipment Management System
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end ">
            <Nav>
              <Link
                to={"/show-bridge-equipment-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Bridge's Equipment
              </Link>
            </Nav>
            <Nav>
              <Link
                to={"/show-bridge-manual-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Bridge's Equipment Manuals
              </Link>
            </Nav>
            <Nav>
              <Link
                to={"/show-deck-equipment-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Deck's Equipment
              </Link>
            </Nav>
            <Nav>
              <Link
                to={"/show-deck-manual-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Deck's Equipment Manuals
              </Link>
            </Nav>

            <Nav>
              <Link
                to={"/show-engine-equipment-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Engine's Equipment
              </Link>
            </Nav>
            <Nav>
              <Link
                to={"/show-engine-manual-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Engine's Equipment Manuals
              </Link>
            </Nav>

            <Nav>
              <Link
                to={"/show-galley-equipment-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Galley's Equipment
              </Link>
            </Nav>
            <Nav>
              <Link
                to={"/show-galley-manual-list"}
                className="nav-link "
                style={{ color: "#9dd0c1" }}
              >
                Galley's Equipment Manuals
              </Link>
            </Nav>
          </Nav>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<ShowHomePage />} />
        <Route path="*" element={<ShowErrorPage/>}/>

        <Route
          path="/show-bridge-equipment-list"
          element={<ShowBridgeEquipList />}
        />
        <Route
          path="/create-bridge-equipment"
          element={<CreateBridgeEquip />}
        />
        <Route
          path="/edit-bridge-equipment/:id"
          element={<UpdateBridgeEquipInfo />}
        />
        <Route
          path="/show-bridge-equipment/:id"
          element={<ShowBridgeEquipDetails />}
        />

        <Route
          path="/show-bridge-manual-list"
          element={<ShowBridgeManualList />}
        />
        <Route path="/create-bridge-manual" element={<CreateBridgeManual />} />
        <Route
          path="/edit-bridge-manual/:id"
          element={<UpdateBridgeManualInfo />}
        />
        <Route
          path="/show-bridge-manual/:id"
          element={<ShowBridgeManualDetails />}
        />

        <Route
          path="/show-deck-equipment-list"
          element={<ShowDeckEquipList />}
        />
        <Route path="/create-deck-equipment" element={<CreateDeckEquip />} />
        <Route
          path="/edit-deck-equipment/:id"
          element={<UpdateDeckEquipInfo />}
        />
        <Route
          path="/show-deck-equipment/:id"
          element={<ShowDeckEquipDetails />}
        />

        <Route path="/show-deck-manual-list" element={<ShowDeckManualList />} />
        <Route path="/create-deck-manual" element={<CreateDeckManual />} />
        <Route
          path="/edit-deck-manual/:id"
          element={<UpdateDeckManualInfo />}
        />
        <Route
          path="/show-deck-manual/:id"
          element={<ShowDeckManualDetails />}
        />

        <Route
          path="/show-engine-equipment-list"
          element={<ShowEngineEquipList />}
        />
        <Route
          path="/create-engine-equipment"
          element={<CreateEngineEquip />}
        />
        <Route
          path="/edit-engine-equipment/:id"
          element={<UpdateEngineEquipInfo />}
        />
        <Route
          path="/show-engine-equipment/:id"
          element={<ShowEngineEquipDetails />}
        />

        <Route
          path="/show-engine-manual-list"
          element={<ShowEngineManualList />}
        />
        <Route path="/create-engine-manual" element={<CreateEngineManual />} />
        <Route
          path="/edit-engine-manual/:id"
          element={<UpdateEngineManualInfo />}
        />
        <Route
          path="/show-engine-manual/:id"
          element={<ShowEngineManualDetails />}
        />

        <Route
          path="/show-galley-equipment-list"
          element={<ShowGalleyEquipList />}
        />
        <Route
          path="/create-galley-equipment"
          element={<CreateGalleyEquip />}
        />
        <Route
          path="/edit-galley-equipment/:id"
          element={<UpdateGalleyEquipInfo />}
        />
        <Route
          path="/show-galley-equipment/:id"
          element={<ShowGalleyEquipDetails />}
        />

        <Route
          path="/show-galley-manual-list"
          element={<ShowGalleyManualList />}
        />
        <Route path="/create-galley-manual" element={<CreateGalleyManual />} />
        <Route
          path="/edit-galley-manual/:id"
          element={<UpdateGalleyManualInfo />}
        />
        <Route
          path="/show-galley-manual/:id"
          element={<ShowGalleyManualDetails />}
        />
      </Routes>

      <footer
        className="justify-content-center"
        style={{ marginTop: "70px", backgroundColor: "#235b8a" }}
      >
        <Row>
          <Col>
            <h3 className="mt-4 " style={{ color: "#9dd0c1" }}>
              Key Events
            </h3>

            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link " href="#" style={{ color: "#9dd0c1" }}>
                  Weekly Safety Drills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" style={{ color: "#9dd0c1" }}>
                  Port Operation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" style={{ color: "#9dd0c1" }}>
                  Cargo Operation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" style={{ color: "#9dd0c1" }}>
                  More ...
                </a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </Col>
          <Col>
            <h3 className="mt-4 " style={{ color: "#9dd0c1" }}>
              Notices
            </h3>

            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link " style={{ color: "#9dd0c1" }} href="#">
                  Weekly Publication Updates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "#9dd0c1" }} href="#">
                  Routine Inspections
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " style={{ color: "#9dd0c1" }} href="#">
                  More ...
                </a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </Col>
          <Col>
            <h3 className="mt-4 " style={{ color: "#9dd0c1" }}>
              Reports
            </h3>

            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link " style={{ color: "#9dd0c1" }} href="#">
                  Weather report
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link " style={{ color: "#9dd0c1" }} href="#">
                  More ...
                </a>
              </li>
            </ul>
            <hr className="d-sm-none" />
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default App;
