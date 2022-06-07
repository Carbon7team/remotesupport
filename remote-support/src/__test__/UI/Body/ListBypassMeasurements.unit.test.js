import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListBypassMeasurements from "../../../UI/Body/DataArea/MeasurementsArea/ListBypassMeasurements";

jest.mock("../../../Utilities/contextProvider");

describe("ListBypassMeasurements correct render", () => {
  test("ListBypassMeasurements correct render", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: true,
        callEnded: false,
        availabilityTech: true,
      },
      datasetStore: {
        bypassMeasurements: [
          {
            code: "M039",
            name: "NomeM039",
            value: 39,
            unitOfMeasure: "Unità di misura",
          },
        ],
      },
    });
    render(<ListBypassMeasurements />);
    expect(
      document.getElementsByClassName("bypass-measurement")[0]
    ).toBeInTheDocument();
  });
});
