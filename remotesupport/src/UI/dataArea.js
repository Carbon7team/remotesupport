import React from 'react';
import { observer } from "mobx-react-lite";
import StatesArea from './StatesArea';
import AlarmsArea from './AlarmsArea';
import MeasurementsArea from './MeasurementsArea';

const dataArea = observer(() => {

    return(
        <div className='dataArea-wrapper'>
            <StatesArea/>
            <AlarmsArea/>
            <MeasurementsArea/>
        </div>
    )
});

export default dataArea;