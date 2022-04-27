import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Utilities/contextProvider";
import { useState } from "react";
import Select from "react-select";
import "./Header.css";

const Header = observer(() => {
  const rootstore = useStore();

  const { logged, callAccepted, callEnded, availabilityTech } = rootstore.stateUIStore;

  const [localAvailable, setLocalAvailable] = useState({ 
    value: "Available", 
    label: "Available" });

  const handleChange = (optionValue) => {

    setLocalAvailable(optionValue);

    if (localAvailable.value === "Available") {
      rootstore.stateUIStore.setAvailabilityTech(true);
    }
    else {
      rootstore.stateUIStore.setAvailabilityTech(false);
    }
  };

  const availabilityOptions = [
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" }
  ];

  return (
    <header>
      <h1>Socomec Remote Support</h1>
      {logged && (
        <div id="wrapper-settings">
          <p>Availability</p>
          <Select id="availabilityBtn" options={availabilityOptions} value={availabilityTech} onChange={handleChange}/>
          <button>Logout</button>
        </div>
      )}
    </header>
  );
});

export default Header;
