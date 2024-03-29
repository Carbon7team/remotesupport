import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListCriticalAlarms from "../../../UI/Body/DataArea/AlarmsArea/ListCriticalAlarms";
import Rootstore from "../../../ModelStores/RootStore";

jest.mock("../../../Utilities/contextProvider");


describe ("ListAllAlarms correct render", () => {

    test("Alarms Area correct render", () => {
        useStore.mockReturnValue({
            stateUIStore: {
                callAccepted: true,
                callEnded: false,
                availabilityTech: true,
            },
            datasetStore: {
                criticalAlarms: [{ code: "A001", name: "NomeA001", severity: "Critical" },]
              },
        });
        
        render(<ListCriticalAlarms />);
        expect(document.getElementsByClassName("critical-item")[0]).toBeInTheDocument();
    });
});
    