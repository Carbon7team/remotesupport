import { observer } from "mobx-react-lite";
import { useStore } from "../../Utilities/contextProvider";
import { useInstance } from "../../Utilities/useInstance";
import BodyVM from "./BodyVM";
import CallArea from "./CallArea/CallArea";
import DataArea from "./DataArea/DataArea";

const Body = observer(() => {

    const {
        techVideo,
        userVideo,
        sendCall
    } = useInstance(new BodyVM(useStore()));

    return(
        <div id="wrapper-body">
            <DataArea callinput={sendCall}/>
            <CallArea techVideo={techVideo} userVideo={userVideo}/>
        </div>
    )
})

export default Body;