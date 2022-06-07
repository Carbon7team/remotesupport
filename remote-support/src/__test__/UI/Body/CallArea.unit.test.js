import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import CallArea from "../../../UI/Body/CallArea/CallArea";
import { useStore } from "../../../Utilities/contextProvider";

jest.mock("../../../Utilities/contextProvider");

describe("CallArea correct render", () => {
  test("CallArea render not in call", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: false,
        callEnded: true,
      },
    });

    let tree = create(<CallArea />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("CallArea render in call", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: true,
        callEnded: false,
        streamTech: null,
      },
    });

    render(<CallArea />);
    expect(document.getElementById("wrapper-sidebar")).toBeInTheDocument();
  });
});
