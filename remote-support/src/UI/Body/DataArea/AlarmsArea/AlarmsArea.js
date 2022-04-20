import { observer } from "mobx-react-lite";
import Select from "react-select";
import { useStore } from "../../../../Utilities/contextProvider";
import { useInstance } from "../../../../Utilities/useInstance";
import { AlarmsAreaVM } from "./AlarmsAreaVM";

const AlarmsArea = observer(() => {

    const {
        renderAllAlarms,
        renderCriticalAlarms,
        renderWarningAlarms,
        options,
        handleChange,
        filterValueAlarms,
        jsonData
    } = useInstance(new AlarmsAreaVM(useStore()));

    return(
        <div className='container-wrapper'>
            <div className='title-wrapper'>
                <h2>Alarms</h2>
                <p>Filters:</p>
                <Select id='filterAlarms' options={options} defaultValue={options[0]} value={filterValueAlarms} onChange={handleChange}/>
            </div>

            <div className='data-wrapper'>
                <ul>
                    {filterValueAlarms === "All" ? renderAllAlarms(jsonData) : <></>}
                    {filterValueAlarms === "Criticals" ? renderCriticalAlarms(jsonData) : <></>}
                    {filterValueAlarms === "Warnings" ? renderWarningAlarms(jsonData) : <></>}
                </ul>
            </div>
        </div>
    )
});

export default AlarmsArea;