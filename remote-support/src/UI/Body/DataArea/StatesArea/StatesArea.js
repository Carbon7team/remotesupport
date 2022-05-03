import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Select from "react-select";
import RenderAllStates from "./RenderAllStates";
import RenderActiveStates from "./RenderActiveStates";
import RenderNotActiveStates from "./RenderNotActiveStates";

const StatesArea = observer(() => {
  const options = [
    { value: "All", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Not Active", label: "Not Active" },
  ];

  const [filterValueStates, setFilterValueStates] = useState({
    value: "All",
    label: "All",
  });

  const handleChange = (optionValue) => {
    setFilterValueStates(optionValue);
  };

  return (
    <div className="s-container-wrapper">
      <h2>States</h2>
      <hr />
      <div className="filter-wrapper">
        <p>Apply Filters:</p>
        <Select
          id="filterStates"
          options={options}
          value={filterValueStates}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="data-wrapper">
        <ul>
          {filterValueStates.value === "All" && <RenderAllStates />}
          {filterValueStates.value === "Active" && <RenderActiveStates />}
          {filterValueStates.value === "Not Active" && (
            <RenderNotActiveStates />
          )}
        </ul>
      </div>
    </div>
  );
});

export default StatesArea;
