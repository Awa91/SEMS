import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateGalleyManual = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [galleyManual, setGalleyManual] = useState({
    name: "",
    publisher: "",
    lastEdition: "",
    description: "",
    totalNumber: "",
    location: "",
  });

  const onChange = (e) => {
    setGalleyManual({ ...galleyManual, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
//http://localhost:8082/api/galley/manuals
//'/api/galley/manuals
    axios
      .post("http://localhost:8082/api/galley/manuals", galleyManual)
      .then((res) => {
        setGalleyManual({
            name: "",
            publisher: "",
            lastEdition: "",
            description: "",
            totalNumber: "",
            location: "",
        });
        //console.log(res);

        // Push to /
        navigate("/show-galley-manual-list");
      })
      .catch((err) => {
        console.log("Error in Create Galley Manual!");
      });
  };

  return (
    <div className="Create">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-galley-manual-list" className="btn btn-outline-warning float-left">
              Show Galley Manual List
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
                  value={galleyManual.name}
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
                  value={galleyManual.publisher}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Last Edition"
                  name="lastEdition"
                  className="form-control"
                  value={galleyManual.lastEdition}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description of the manual"
                  name="description"
                  className="form-control"
                  value={galleyManual.description}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Total Number"
                  name="totalNumber"
                  className="form-control"
                  value={galleyManual.totalNumber}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location(s) of this manual"
                  name="location"
                  className="form-control"
                  value={galleyManual.location}
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

export default CreateGalleyManual;
