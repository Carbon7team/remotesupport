import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { useStore } from "../../Utilities/contextProvider";
import { useInstance } from "../../Utilities/useInstance";
import BodyVM from "./BodyVM";
import CallArea from "./CallArea/CallArea";
import DataArea from "./DataArea/DataArea";

const Body = observer(() => {

    const techVideo = useRef(null);
    const userVideo = useRef(null);
    const call = useRef(null);
    const connectionDataChannel = useRef(null);
    const peerTech = useRef(null);


    const {
        sendCall,
        setDataRequestClient,
        availabilityTech,
        requestReceived
    } = useInstance(new BodyVM(useStore()));

    
    useEffect(() => {
        if(availabilityTech && requestReceived) {
            setDataRequestClient();
        }
        // eslint-disable-next-line
    }, []);

    return(
        <div id="wrapper-body">
            <DataArea sendcall={sendCall}/>
            <CallArea techVideo={techVideo} userVideo={userVideo} call={call} connectionDataChannel={connectionDataChannel} peerTech={peerTech}/>
        </div>
    )
})

export default Body;