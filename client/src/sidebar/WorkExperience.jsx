import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="workExperience"
            id="any-experience"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any experience
        </label>

        <InputField
          handleChange={handleChange}
          value="internship"
          title="Internship"
          name="workExperience"
        />
        <InputField
          handleChange={handleChange}
          value="Work remotely"
          title="Work remotely"
          name="workExperience"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
