import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleClick} value="Hourly" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location"
            id="salary"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value={3}
          title="< 3000 $"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={5}
          title="< 5000 $"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={8}
          title="< 8000 $"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={10}
          title="< 10000 $"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
