import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { AlarmsAreaVM } from './AlarmsAreaVM';
import { useStore } from '../../contextProvider';
import Select from 'react-select';

const AlarmsArea = observer(() => {

    const {
        renderAllAlarms,
        renderCriticalAlarms,
        renderWarningAlarms,
    } = useInstance(new AlarmsAreaVM(useStore()));

    const [alarmType,setAlarmType] = useState({value: 'All', label: 'All'});

    handleChange = (optionValue) => {
        setAlarmType(optionValue);
    }

    var options = [ {value: 'All', label: 'All'},
                    {value: 'Criticals', label: 'Criticals'},
                    {value: 'Warnings', label: 'Warnings'} ];

    return(
        <div className='container-wrapper'>
            <div className='title-wrapper'>
                <h2>Alarms</h2>
                <p>Filters</p>
                <Select id='filterAlarms' options={options} onChange={handleChange}/>
            </div>

            <div className='data-wrapper'>
                <ul>
                    {alarmType.value === "All" ? renderAllAlarms : <></>}
                    {alarmType.value === "Criticals" ? renderCriticalAlarms : <></>}
                    {alarmType.value === "Warnings" ? renderWarningAlarms : <></>}
                </ul>
            </div>
        </div>
    )
});

export default AlarmsArea;