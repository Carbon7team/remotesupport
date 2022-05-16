import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import DataArea from "../../../UI/Body/DataArea/DataArea";
import { useStore } from "../../../Utilities/contextProvider";

jest.mock("../../../Utilities/contextProvider");

describe("DataArea correct render", () => {
  test("DataArea render not in call", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: false,
        callEnded: true,
      },
    });
    let tree = create(<DataArea />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("DataArea render in call", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: true,
        callEnded: false,
        availabilityTech: true,
      },
      datasetStore: {
        states: [
          { code: "S000", name: "stato attivo", active: true },
          { code: "S001", name: "stato non attivo", active: false },
        ],
        alarms: [
          { code: "A000", name: "NomeA000", severity: "Critical" },
          { code: "A001", name: "NomeA001", severity: "Warning" },
        ],
        measurements: [
          {
            code: "M015",
            name: "NomeM015",
            value: 30,
            unitOfMeasure: "Unità di misura",
          },
          { code: "M014", name: "NomeM014", value: 20, unitOfMeasure: "UdM" },
          { code: "M045", name: "NomeM045", value: 20, unitOfMeasure: "UdM" },
          { code: "M038", name: "NomeM038", value: 20, unitOfMeasure: "UdM" },
        ],
      },
    });
    render(<DataArea />);
    expect(document.getElementById("data-display")).toBeInTheDocument();
  });
});
