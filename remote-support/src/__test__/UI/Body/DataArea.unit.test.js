import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import DataArea from "../../../UI/Body/DataArea/DataArea";
import { useStore } from "../../../Utilities/contextProvider";

jest.mock("../../../Utilities/contextProvider");

describe("DataArea correct render", () => {
  const vars = jest.fn().mockReturnValue({
    peerTech: { current: new Peer() },
    call: { current: null },
    connectionDataChannel: { current: null },
  });

    test("DataArea render not in call", () => {
        useStore.mockReturnValue({
            stateUIStore: {
                callAccepted: false,
                callEnded: true,
            },
        });
        let tree = create(<DataArea vars={vars} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("DataArea render in call", () => {
        useStore.mockReturnValue({
            stateUIStore: {
                callAccepted: true,
                callEnded: false,
                availabilityTech: true,
            },
        });
        render(<DataArea vars={vars} />); 
        expect(document.getElementById("data-display")).toBeInTheDocument();
    });
});
