import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListNotActiveStates from "../../../UI/Body/DataArea/StatesArea/ListNotActiveStates";

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
                notActiveStates: [
                  { code: "S001", name: "stato non attivo", active: false },
                ],
              }
        });
        render(<ListNotActiveStates vars={vars} />);
        expect(document.getElementsByClassName("not-active-item")[0]).toBeInTheDocument();
    });
});
    