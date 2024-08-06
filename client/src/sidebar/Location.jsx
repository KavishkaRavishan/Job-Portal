import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location"
            id="all-location"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="colombo"
          title="Colombo"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="gampaha"
          title="Gampaha"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="kurunegala"
          title="Kurunegala"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="galle"
          title="Galle"
          name="location"
        />
      </div>
    </div>
  );
};

export default Location;
