import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Utilities/contextProvider";
import Select from "react-select";
import "./Header.css";

const Header = observer(() => {
  const rootstore = useStore();

  const { logged, callAccepted, callEnded, selectAvailability } =
    rootstore.stateUIStore;

  const handleChange = (optionValue) => {
    rootstore.stateUIStore.setSelectAvailability(optionValue);

    if (rootstore.stateUIStore.selectAvailability.value === "Available") {
      rootstore.stateUIStore.setAvailabilityTech(true);
    } else {
      rootstore.stateUIStore.setAvailabilityTech(false);
    }
  };

  const options = [
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" },
  ];

  return (
    <header>
      <h1>Socomec Remote Support</h1>
      {logged && (
        <div id="wrapper-settings">
          <p>Availability</p>
          <Select
            id="availabilityBtn"
            options={options}
            value={selectAvailability}
            defaultValue={options[0]}
            onChange={handleChange}
            isDisabled={callAccepted && !callEnded}
          />
          <button>Logout</button>
        </div>
      )}
    </header>
  );
});

export default Header;
