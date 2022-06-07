import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListInputMeasurements from "../../../UI/Body/DataArea/MeasurementsArea/ListInputMeasurements";

jest.mock("../../../Utilities/contextProvider");

describe("ListInputMeasurements correct render", () => {
  test("ListInputMeasurements correct render", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: true,
        callEnded: false,
        availabilityTech: true,
      },
      datasetStore: {
        inputMeasurements: [
          {
            code: "M032",
            name: "NomeM032",
            value: 32,
            unitOfMeasure: "Unità di misura",
          },
        ],
      },
    });
    render(<ListInputMeasurements />);
    expect(
      document.getElementsByClassName("input-measurement")[0]
    ).toBeInTheDocument();
  });
});
