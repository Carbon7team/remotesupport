import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import StatesArea from './StatesArea';
import AlarmsArea from './AlarmsArea';
import MeasurementsArea from './MeasurementsArea';
import Dataset from '../../store/Dataset'
import { ContextCall, ContextProvider } from '../CallArea/ContextCall';
import { AppContextProvider } from '../../contextProvider';

const DataArea = () => {
    const {callAccepted, callEnded,/* avaiabilityTech */} = useContext(ContextCall);

    const dataSet = new Dataset();
    return(
        <div className='dataArea-wrapper'>
            
            { callAccepted && !callEnded && (
            <>
            <ContextProvider>
            <AppContextProvider dataset={dataSet}>
                <StatesArea/>
                <AlarmsArea/>
                <MeasurementsArea/>
            </AppContextProvider>
            </ContextProvider>
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