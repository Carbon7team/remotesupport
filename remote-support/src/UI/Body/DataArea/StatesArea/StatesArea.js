import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Select from "react-select";
import ListAllStates from "./ListAllStates";
import ListActiveStates from "./ListActiveStates";
import ListNotActiveStates from "./ListNotActiveStates";

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
          {filterValueStates.value === "All" && <ListAllStates />}
          {filterValueStates.value === "Active" && <ListActiveStates />}
          {filterValueStates.value === "Not Active" && <ListNotActiveStates />}
        </ul>
      </div>
    </div>
  );
});

export default StatesArea;
