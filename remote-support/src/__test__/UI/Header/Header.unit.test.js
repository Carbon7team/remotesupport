import { render } from "@testing-library/react";
import { useStore } from "../../../Utilities/contextProvider";

import Header from "../../../UI/Header/Header";

// jest.mock("../../Utilities/contextProvider", () => ({
//     useStore: () => ({
//         stateUIStore : {
//             logged : false,
//             callAccepted : false,
//             callEnded: true,
//             selectAvailability: { value: "Available", label: "Available" }
//         }
//     })
// }))

// create useStore mock
jest.mock("../../../Utilities/contextProvider");

describe("Header custom render with mock", () => {
  test("Header when not logged", () => {
    // setting mock's values
    useStore.mockReturnValueOnce({
      stateUIStore: {
        logged: false,
        callAccepted: false,
        callEnded: true,
        selectAvailability: { value: "Available", label: "Available" },
      },
    });
    render(<Header />);
    expect(document.getElementById("wrapper-settings")).not.toBeInTheDocument();
  });

  test("Header when logged", () => {
    // setting mock's value
    useStore.mockReturnValueOnce({
      stateUIStore: {
        logged: true,
        callAccepted: false,
        callEnded: true,
        selectAvailability: { value: "Available", label: "Available" },
      },
    });
    render(<Header />);
    expect(document.getElementById("wrapper-settings")).toBeInTheDocument();
  });
});
