import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import StatesArea from './StatesArea';
import AlarmsArea from './AlarmsArea';
import MeasurementsArea from './MeasurementsArea';
import Dataset from '../store/Dataset';
import { SocketContext } from '../CallArea/ContextCall';

const dataArea = () => {
    const {callAccepted, callEnded, /* jsonData, avaiabilityTech */} = useContext(SocketContext);

    const dataSet = new Dataset();
    return(
        <div className='dataArea-wrapper'>
            <AppContextProvider dataset={dataSet}>
            
            { callAccepted && !callEnded && (
            <>
                <StatesArea/>
                <AlarmsArea/>
                <MeasurementsArea/>
            </>
            )
            }

            { (!callAccepted || callEnded) && /* avaiabilityTech &&*/ (
                <>
                    Waiting for new request in...
                </>
            )
            }

            {
                (!callAccepted || callEnded) && /* !avaiabilityTech &&*/ (
                    <>
                        <p>Not Avaiable for requests!</p>
                    </>
                )
            }
            </AppContextProvider>
        </div>
    )
};

export default dataArea;