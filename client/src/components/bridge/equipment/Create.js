import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CreateBridgeEquip = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [bridgeEquip, setBridgeEquip] = useState({
    name: "",
    manufacturer: "",
    lastInspectionDate: "",
    description: "",
    totalNumber: "",
    location: "",
  });

  const onChange = (e) => {
    setBridgeEquip({ ...bridgeEquip, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8082/api/bridge/equipment", bridgeEquip)
      .then((res) => {
        setBridgeEquip({
          name: "",
          manufacturer: "",
          lastInspectionDate: "",
          description: "",
          totalNumber: "",
          location: "",
        });

        // Push to /
        navigate("/show-bridge-equipment-list");
      })
      .catch((err) => {
        console.log("Error in Create Bridge equipment!");
      });
  };

  return (
    <div className="Create">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/show-bridge-equipment-list" className="btn btn-outline-warning float-left">
              Show Bridge Equipment List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Equipment</h1>
            <p className="lead text-center">Create new equipment</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name of the Equipment"
                  name="name"
                  className="form-control"
                  value={bridgeEquip.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Manufacturer"
                  name="manufacturer"
                  className="form-control"
                  value={bridgeEquip.manufacturer}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Last Inspection Date"
                  name="lastInspectionDate"
                  className="form-control"
                  value={bridgeEquip.lastInspectionDate}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description of the equipment"
                  name="description"
                  className="form-control"
                  value={bridgeEquip.description}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  placeholder="Total Number"
                  name="totalNumber"
                  className="form-control"
                  value={bridgeEquip.totalNumber}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Location(s) of this equipment"
                  name="location"
                  className="form-control"
                  value={bridgeEquip.location}
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

export default CreateBridgeEquip;
