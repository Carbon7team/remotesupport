import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import Peer from "peerjs";
import { useStore } from "../../../Utilities/contextProvider";
import ListBatteryMeasurements from "../../../UI/Body/DataArea/MeasurementsArea/ListBatteryMeasurements";

jest.mock("../../../Utilities/contextProvider");

describe("ListBatteryMeasurements correct render", () => {
  test("ListBatteryMeasurements correct render", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        callAccepted: true,
        callEnded: false,
        availabilityTech: true,
      },
      datasetStore: {
        batteryMeasurements: [
          {
            code: "M015",
            name: "NomeM015",
            value: 30,
            unitOfMeasure: "Unità di misura",
          },
        ],
      },
    });
    render(<ListBatteryMeasurements />);
    expect(
      document.getElementsByClassName("battery-measurement")[0]
    ).toBeInTheDocument();
  });
});
