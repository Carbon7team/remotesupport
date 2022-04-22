import React from 'react';
import { observer } from "mobx-react-lite";
import StatesAreaVM from './StatesAreaVM';
import { useStore } from '../../../../Utilities/contextProvider';
import { useInstance } from '../../../../Utilities/useInstance';
import Select from 'react-select';


const StatesArea = observer(() => {
    
    const {
        renderAllStates,
        renderActiveStates,
        renderNotActiveStates,
        options,
        handleChange,
        filterValueStates,
        jsonData
    } = useInstance(new StatesAreaVM(useStore()));

    return(
        <div className='container-wrapper'>
            <div className='title-wrapper'>
                <h2>States</h2>
                <p>Filters:</p>
                <Select id='filterStates' options={options} defaultValue={options[0]} value={filterValueStates} onChange={handleChange}/>
            </div>

            <div className='data-wrapper'>
                <ul>
                    {filterValueStates === "All" ? renderAllStates(jsonData) : <></>}
                    {filterValueStates === "Active" ? renderActiveStates(jsonData) : <></>}
                    {filterValueStates === "Not Active" ? renderNotActiveStates(jsonData) : <></>}
                </ul>
            </div>
        </div>
    )
});

export default StatesArea;