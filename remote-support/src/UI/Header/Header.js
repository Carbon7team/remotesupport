import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Utilities/contextProvider";
import "./Header.css";

const Header = observer(() => {
  const rootstore = useStore();

  const { logged, callAccepted, callEnded } = rootstore.stateUIStore;

  return (
    <header>
      <h1>Socomec Remote Support</h1>
      {logged && (
        <div id="wrapper-settings">
          <p>Availability</p>
          <select name="availability">
            <option>Available</option>
            <option>Not Available</option>
          </select>
          <button>Logout</button>
        </div>
      )}
    </header>
  );
});

export default Header;
