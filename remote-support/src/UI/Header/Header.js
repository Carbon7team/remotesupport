import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Utilities/contextProvider";
import Select from "react-select";
import "./Header.css";

const Header = observer(() => {
  const rootstore = useStore();

  const { logged, callAccepted, callEnded, selectAvailability } =
    rootstore.stateUIStore;


    async function availabilityFetch(valueAvailability) {
      
      const data = {
        disponibility: valueAvailability,
        user_id: rootstore.stateUIStore.idTech
      }
      console.log("availability :"+ valueAvailability);
      return fetch("http://localhost:4000/changeDisponibility", {
        method: "POST",
        headers: { 'Authentication': rootstore.stateUIStore.tokenAuth ,"Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((data) => data)    //print data to console
      .catch(err => console.log('Request Failed', err)); // Catch errors
     
    }

  const handleChange = async (optionValue)  => {
    rootstore.stateUIStore.setSelectAvailability(optionValue);

    // chiamata http
    
    if (rootstore.stateUIStore.selectAvailability.value === "Available") {
      const fetch = await availabilityFetch(true);
        if(fetch.status== 200)
          rootstore.stateUIStore.setAvailabilityTech(true);
        else console.log(fetch.body);
      
    
    } else {
      const fetch = await availabilityFetch(false);
      if(fetch.status== 200)
        rootstore.stateUIStore.setAvailabilityTech(false);
      else console.log(fetch.body);
    }
  };

  const options = [
    { value: "Available", label: "Available" },
    { value: "Not Available", label: "Not Available" },
  ];

  const logout = async () => {
   
    // chiamata http
    await fetch("http://localhost:4000/logout", {
      method: "DELETE",
      headers: { 'authorization': rootstore.stateUIStore.tokenAuth },
    }).then((data) => console.log(data.message));

    rootstore.stateUIStore.setLogged(false);
    rootstore.stateUIStore.setTokenAuth(undefined);
  };

  return (
    <div id="header-wrapper">
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
          <button
            onClick={() => {
              logout();
            }}
            disabled={callAccepted && !callEnded}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
});

export default Header;
