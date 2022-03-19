import React from 'react';
import { observer } from "mobx-react-lite";
import { AlarmsAreaVM } from './AlarmsAreaVM';
import { useStore } from '../contextProvider';

const AlarmsArea = observer(() => {

    const {
        alarms
    } = useInstance(new AlarmsAreaVM(useStore()))

    function renderAlarms(){
        switch(alarms[2]){}// per vedere quale opzione è selezionata su select si fa onchange, funzione con
                            // var selectedValue = document.getElementById("filterAlarms").options[filterAlarms.selectedIndex].value;
        alarms.forEach(alarm => {
            return(<ul>{alarm[0]}: {alarm[1]}</ul>)
        });
    }

    function filterByCritical(){
        return alarms
    }

    return(
        <div className='data-wrapper'>
            <div className='title-wrapper'>
                <h2>Alarms</h2>
                <p>Filters</p>
                <select id='filterAlarms'>
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