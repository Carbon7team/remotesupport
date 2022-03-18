import React from 'react';
import { observer } from "mobx-react-lite";

const AlarmsArea = observer(() => {

    return(
        <div className='data-wrapper'>
            <div className='title-wrapper'>
                <h2>Alarms</h2>
                <p>Filters</p>
                <select>
                    <option selected>All</option>
                    <option>Warnings</option>
                    <option>Criticals</option>
                </select>
            </div>

            <div>
                
            </div>
        </div>
    )
});

export default AlarmsArea;