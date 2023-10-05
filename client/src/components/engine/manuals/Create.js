import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateEngineManual = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [engineManual, setEngineManual] = useState({
    name: "",
    publisher: "",
    lastEdition: "",
    description: "",
    totalNumber: "",
    location: "",
  });

  const onChange = (e) => {
    setEngineManual({ ...engineManual, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/engine/manuals", engineManual)
      .then((res) => {
        setEngineManual({
            name: "",
            publisher: "",
            lastEdition: "",
            description: "",
            totalNumber: "",
            location: "",
        });

        // Push to /
        navigate("/show-engine-manual-list");
      })
      .catch((err) => {
        console.log("Error in Create Engine Manual!");
      });
  };

  return (
    <div className="Create">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-engine-equipment-list" className="btn btn-outline-warning float-left">
              Show Engine Manual List
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
                  value={engineManual.name}
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
                  value={engineManual.publisher}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Last Edition"
                  name="lastEdition"
                  className="form-control"
                  value={engineManual.lastEdition}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description of the manual"
                  name="description"
                  className="form-control"
                  value={engineManual.description}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Total Number"
                  name="totalNumber"
                  className="form-control"
                  value={engineManual.totalNumber}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location(s) of this manual"
                  name="location"
                  className="form-control"
                  value={engineManual.location}
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

export default CreateEngineManual;
