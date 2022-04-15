import { observer } from "mobx-react-lite";
import Select from "react-select/dist/declarations/src/Select";
import { AlarmsAreaVM } from "./AlarmsAreaVM";

const AlarmsArea = observer(() => {

    const {
        renderAllAlarms,
        renderCriticalAlarms,
        renderWarningAlarms,
        options,
        handleChange,
        filterValueAlarm,
    } = useInstance(new AlarmsAreaVM(useStore()));

    return(
        <div className='container-wrapper'>
            <div className='title-wrapper'>
                <h2>Alarms</h2>
                <p>Filters:</p>
                <Select id='filterAlarms' options={options} onChange={e => handleChange(e.target.value)}/>
            </div>

            <div className='data-wrapper'>
                <ul>
                    {filterValueAlarm === "All" ? renderAllAlarms : <></>}
                    {filterValueAlarm === "Criticals" ? renderCriticalAlarms : <></>}
                    {filterValueAlarm === "Warnings" ? renderWarningAlarms : <></>}
                </ul>
            </div>
        </div>
    )
});

export default AlarmsArea;