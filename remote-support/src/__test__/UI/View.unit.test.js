import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../Utilities/contextProvider";
import View from "../../UI/View";

jest.mock("../../Utilities/contextProvider");


describe ("ListBypassMeasurements correct render", () => {
    const vars = jest.fn().mockReturnValue({
        peerTech: { current: new Peer() },
        call: { current: null },
        connectionDataChannel: { current: null },
    });

    test("ListBypassMeasurements correct render", () => {
        useStore.mockReturnValue({
            stateUIStore: {
                logged: true,
            },
        });
        render(<View vars={vars} />);
        expect(document.getElementById("view-wrapper")).toBeInTheDocument();
    });
});

