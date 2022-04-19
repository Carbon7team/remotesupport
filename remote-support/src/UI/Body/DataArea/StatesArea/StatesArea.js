import React from 'react';
import { observer } from "mobx-react-lite";


const StatesArea = observer(() => {
    
    return(
        <div className='data-wrapper'>
            <div className='title-wrapper'>
                <h2>States</h2>
                <p>Filters</p>
                <select>
                    <option selected>All</option>
                    <option>Actives</option>
                    <option>Not Actives</option>
                </select>
            </div>

            <div>
                
            </div>
        </div>
    )
});

export default StatesArea;