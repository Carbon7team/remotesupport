import { observer } from "mobx-react-lite";
import { useStore } from "../../../Utilities/contextProvider";
import AlarmsArea from "./AlarmsArea/AlarmsArea";
import StatesArea from "./StatesArea/StatesArea";
import MeasurementsArea from "./MeasurementsArea/MeasurementsArea";
import "./DataArea.css";

const DataArea = observer(() => {
  const rootstore = useStore();

  const {
    callAccepted,
    callEnded,
    availabilityTech,
    requestReceived,
    nameClient,
    surnameClient,
    emailClient,
    usernameClient,
  } = rootstore.stateUIStore;

  return (
    <div className="dataArea-wrapper">
      {callAccepted && !callEnded && (
        <div id="data-display">
          <StatesArea />
          <AlarmsArea />
          <MeasurementsArea />
        </div>
      )}

      {!callAccepted && callEnded && availabilityTech && (
        <div id="waiting">
          <h3>Available for requests!</h3>
          <p>Waiting for new request down here:</p>
          {requestReceived && (
            <div id="request">
              <h4>Client informations</h4>
              <p>Name: {nameClient}</p>
              <p>Surname: {surnameClient}</p>
              <p>Username: {usernameClient}</p>
              <p>E-mail: {emailClient}</p>
            </div>
          )}
        </div>
      )}

      {!callAccepted && callEnded && !availabilityTech && (
        <div id="not-available">
          <h3>Not Available for requests!</h3>
          <p>If you are free, you can modify your availability</p>
        </div>
      )}
    </div>
  );
});

export default DataArea;
