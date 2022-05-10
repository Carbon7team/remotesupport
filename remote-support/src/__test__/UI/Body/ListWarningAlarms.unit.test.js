import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListWarningAlarms from "../../../UI/Body/DataArea/AlarmsArea/ListWarningAlarms";
import Rootstore from "../../../ModelStores/RootStore";

jest.mock("../../../Utilities/contextProvider");


describe ("ListAllAlarms correct render", () => {
    const vars = jest.fn().mockReturnValue({
        peerTech: { current: new Peer() },
        call: { current: null },
        connectionDataChannel: { current: null },
    });

    test("Alarms Area correct render", () => {
        useStore.mockReturnValue({
            stateUIStore: {
                callAccepted: true,
                callEnded: false,
                availabilityTech: true,
            },
            datasetStore: {
                warningAlarms: [{ code: "A001", name: "NomeA001", severity: "Warning" },]
              },
        });
        
        render(<ListWarningAlarms vars={vars} />);
        expect(document.getElementsByClassName("warning-item")[0]).toBeInTheDocument();
    });
});
    