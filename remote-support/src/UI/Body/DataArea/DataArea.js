import { observer } from "mobx-react-lite";
import { useStore } from "../../../Utilities/contextProvider";
import { useInstance } from "../../../Utilities/useInstance";
import AlarmsArea from "./AlarmsArea/AlarmsArea";
import StatesArea from "./StatesArea/StatesArea";
import MeasurementsArea from "./MeasurementsArea/MeasurementsArea";
import DataAreaVM from "./DataAreaVM";



const DataArea = observer(() => {

    const {
        callAccepted,
        callEnded,
        avaiabilityTech
    } = useInstance(new DataAreaVM(useStore()));

    return(
        <div className='dataArea-wrapper'>
            
            { callAccepted && !callEnded && (
            <div id="data-display">
                <StatesArea/>
                <AlarmsArea/>
                <MeasurementsArea/>
            </div>
            )
            }

            { (!callAccepted || callEnded) && avaiabilityTech && (
                <div id="waiting">
                    Waiting for new request in...
                </div>
            )
            }

            {
                (!callAccepted || callEnded) && !avaiabilityTech && (
                    <div id="not-avaiable">
                        <h3>Not Avaiable for requests!</h3>
                        <p>If you are free, you can modify your avaiability</p>
                    </div>
                )
            }
        </div>
    )
})

export default DataArea;