import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import CallArea from "../../../UI/Body/CallArea/CallArea";
import { useStore } from "../../../Utilities/contextProvider";

jest.mock("../../../Utilities/contextProvider");

describe("CallArea correct render", () => {
  const vars = jest.fn().mockReturnValue({
    peerTech: { current: new Peer() },
    call: { current: null },
    connectionDataChannel: { current: null },
  });

  test("CallArea render not in call", () => {
    useStore.mockReturnValueOnce({
      stateUIStore: {
        callAccepted: false,
        callEnded: true,
      },
    });

    let tree = create(<CallArea vars={vars} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("CallArea render in call", () => {
    useStore.mockReturnValueOnce({
      stateUIStore: {
        streamTech: null,
      },
    });

    let tree = create(<CallArea vars={vars} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
