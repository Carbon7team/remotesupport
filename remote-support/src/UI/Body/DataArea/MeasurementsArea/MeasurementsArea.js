import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";
import { useInstance } from "../../../../Utilities/useInstance";
import MeasurementsAreaVM from "./MeasurementsAreaVM";

const MeasurementsArea = observer(() => {
// eslint-disable-next-line
    const {} = useInstance(new MeasurementsAreaVM(useStore()));
    
    return(
        <div className='data-wrapper'>

        </div>
    )
});

export default MeasurementsArea;