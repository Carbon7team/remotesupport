import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListOutputMeasurements from "../../../UI/Body/DataArea/MeasurementsArea/ListOutputMeasurements";

jest.mock("../../../Utilities/contextProvider");

describe("ListOutputMeasurements correct render", () => {
  test("ListOutputMeasurements correct render", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: true,
        callEnded: false,
        availabilityTech: true,
      },
      datasetStore: {
        outputMeasurements: [
          {
            code: "M014",
            name: "NomeM014",
            value: 14,
            unitOfMeasure: "Unità di misura",
          },
        ],
      },
    });
    render(<ListOutputMeasurements />);
    expect(
      document.getElementsByClassName("output-measurement")[0]
    ).toBeInTheDocument();
  });
});
