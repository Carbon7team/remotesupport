import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import StatesArea from './StatesArea';
import AlarmsArea from './AlarmsArea';
import MeasurementsArea from './MeasurementsArea';
import Dataset from '../store/Dataset';
import { ContextCall } from '../CallArea/ContextCall';

const DataArea = () => {
    const {callAccepted, callEnded, /* jsonData, avaiabilityTech */} = useContext(ContextCall);

    const dataSet = new Dataset();
    return(
        <div className='dataArea-wrapper'>
            
            { callAccepted && !callEnded && (
            <>
            <AppContextProvider dataset={dataSet}>
                <StatesArea/>
                <AlarmsArea/>
                <MeasurementsArea/>
            </AppContextProvider>
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
        </div>
    )
};

export default DataArea;