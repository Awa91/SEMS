import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateDeckManual = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [deckManual, setDeckManual] = useState({
    name: "",
    publisher: "",
    lastEdition: "",
    description: "",
    totalNumber: "",
    location: "",
  });

  const onChange = (e) => {
    setDeckManual({ ...deckManual, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/deck/manuals", deckManual)
      .then((res) => {
        setDeckManual({
            name: "",
            publisher: "",
            lastEdition: "",
            description: "",
            totalNumber: "",
            location: "",
        });

        // Push to /
        navigate("/show-deck-manual-list");
      })
      .catch((err) => {
        console.log("Error in Create Decke Manual!");
      });
  };

  return (
    <div className="Create">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-deck-manual-list" className="btn btn-outline-warning float-left">
              Show Deck Manual List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Manual</h1>
            <p className="lead text-center">Create new manual</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name of the Manual"
                  name="name"
                  className="form-control"
                  value={deckManual.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Publisher"
                  name="publisher"
                  className="form-control"
                  value={deckManual.publisher}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Last Edition"
                  name="lastEdition"
                  className="form-control"
                  value={deckManual.lastEdition}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description of the manual"
                  name="description"
                  className="form-control"
                  value={deckManual.description}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Total Number"
                  name="totalNumber"
                  className="form-control"
                  value={deckManual.totalNumber}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location(s) of this manual"
                  name="location"
                  className="form-control"
                  value={deckManual.location}
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDeckManual;
