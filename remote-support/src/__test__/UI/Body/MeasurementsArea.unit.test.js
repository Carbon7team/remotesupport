import { render } from "@testing-library/react";
import { useStore } from "../../../Utilities/contextProvider";
import MeasurementsArea from "../../../UI/Body/DataArea/MeasurementsArea/MeasurementsArea";

jest.mock("../../../Utilities/contextProvider");

describe("Measurements Area correct render", () => {
  test("Measurements Area correct render", () => {
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
    render(<MeasurementsArea />);
    expect(
      document.getElementsByClassName("m-container-wrapper")[0]
    ).toBeInTheDocument();
  });
});
