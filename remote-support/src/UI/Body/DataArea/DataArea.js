import { observer } from "mobx-react-lite";
import { useStore } from "../../../Utilities/contextProvider";
import { useInstance } from "../../../Utilities/useInstance";
import AlarmsArea from "./AlarmsArea/AlarmsArea";
import StatesArea from "./StatesArea/StatesArea";
import MeasurementsArea from "./MeasurementsArea/MeasurementsArea";
import DataAreaVM from "./DataAreaVM";
import { Button } from "@material-ui/core"



const DataArea = observer((props) => {

    const {sendCall} = props;

    const {
        callAccepted,
        callEnded,
        availabilityTech,
        requestReceived,
        idUserClient,
        nameClient,
        surnameClient,
        companyClient,
        declineCall

    } = useInstance(new DataAreaVM(useStore()));

    return(
        <div className='dataArea-wrapper'>
            {/* {console.log("Call Accepted: ", callAccepted)}
            {console.log("Call Ended: ", callEnded)} */}
            {
                callAccepted && (!callEnded) && (
                    <div id="data-display">
                        <StatesArea/>
                        <AlarmsArea/>
                        <MeasurementsArea/>
                    </div>
                )
            }

            {
                (!callAccepted) && callEnded && availabilityTech && (
                    <div id="waiting">
                        Waiting for new request down here:

                        { requestReceived && (
                        <div id="request">
                            <p>{nameClient}</p>
                            <p>{surnameClient}</p>
                            <p>{companyClient}</p>
                            <Button id="accept-button" onClick={sendCall(idUserClient)}>Accept</Button>
                            <Button id="decline-button" onClick={declineCall}>Decline</Button>)
                        </div>
                        )}

                    </div>
                )
            }

            {
                (!callAccepted) && callEnded && (!availabilityTech) && (
                    <div id="not-available">
                        <h3>Not Available for requests!</h3>
                        <p>If you are free, you can modify your availability</p>
                    </div>
                )
            }
        </div>
    )
})

export default DataArea;