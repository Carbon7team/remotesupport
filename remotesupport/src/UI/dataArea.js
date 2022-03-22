import React from 'react';
import { observer } from "mobx-react-lite";
import StatesArea from './StatesArea';
import AlarmsArea from './AlarmsArea';
import MeasurementsArea from './MeasurementsArea';
import Dataset from '../store/Dataset';

const dataArea = observer(() => {

    const dataSet = new Dataset();
    return(
        <div className='dataArea-wrapper'>
            <AppContextProvider dataset={dataSet}>
            <StatesArea/>
            <AlarmsArea/>
            <MeasurementsArea/>
            </AppContextProvider>
        </div>
    )
});

export default dataArea;