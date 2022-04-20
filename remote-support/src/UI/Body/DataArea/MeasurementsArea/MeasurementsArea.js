import { observer } from "mobx-react-lite";
import Select from "react-select";
import { useStore } from "../../../../Utilities/contextProvider";
import { useInstance } from "../../../../Utilities/useInstance";
import MeasurementsAreaVM from "./MeasurementsAreaVM";

const MeasurementsArea = observer(() => {
// eslint-disable-next-line
    const {
        renderBatteryMeasurements,
        renderInputMeasurements,
        renderOutputMeasurements,
        renderBypassMeasurements,
        renderInverterMeasurements,
        options,
        handleChange,
        filterValueMeasurements,
        jsonData
    } = useInstance(new MeasurementsAreaVM(useStore()));


    
    return(
        <div className='data-wrapper'>
            <div className='title-wrapper'>
                <h2>Measurements</h2>
                <p>Filters:</p>
                <Select id='filterAlarms' options={options} defaultValue={options[0]} value={filterValueMeasurements} onChange={handleChange}/>
            </div>

            <div className='data-wrapper'>
                <ul>
                    {filterValueMeasurements === "Battery" ? renderBatteryMeasurements(jsonData) : <></>}
                    {filterValueMeasurements === "Input" ? renderInputMeasurements(jsonData) : <></>}
                    {filterValueMeasurements === "Output" ? renderOutputMeasurements(jsonData) : <></>}
                    {filterValueMeasurements === "Bypass" ? renderBypassMeasurements(jsonData) : <></>}
                    {filterValueMeasurements === "Inverter" ? renderInverterMeasurements(jsonData) : <></>}
                </ul>
            </div>
        </div>
    )
});

export default MeasurementsArea;