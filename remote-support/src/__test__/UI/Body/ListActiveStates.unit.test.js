import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListActiveStates from "../../../UI/Body/DataArea/StatesArea/ListActiveStates";

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
                activeStates: [
                  { code: "S001", name: "stato  attivo", active: true },
                ],
              }
        });
        render(<ListActiveStates vars={vars} />);
        expect(document.getElementsByClassName("active-item")[0]).toBeInTheDocument();
    });
});
    