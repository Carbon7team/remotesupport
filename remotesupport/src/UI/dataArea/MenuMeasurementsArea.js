import React from 'react';
import { observer } from "mobx-react-lite";

const MenumeasurementsArea = observer(() => {
   
    return(
        <>
        <p>Measurements</p>
        <div id='buttons-wrapper'>
            <button>Battery</button>
            <button>Input</button>
            <button>Output</button>
            <button>Bypass</button>
            <button>Inverter</button>
        </div>
        </>
    )
});

export default MenumeasurementsArea;