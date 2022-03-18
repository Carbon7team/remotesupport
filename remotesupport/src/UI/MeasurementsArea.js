import React from 'react';
import { observer } from "mobx-react-lite";
import MenumeasurementsArea from './MenuMeasurementsArea';

const MeasurementsArea = observer(() => {
    
    return(
        <div className='data-wrapper'>
            <MenumeasurementsArea />
            //stampa dati in base al menu
        </div>
    )
});

export default MeasurementsArea;