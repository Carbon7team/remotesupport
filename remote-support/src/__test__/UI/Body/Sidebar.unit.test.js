import { render } from "@testing-library/react";
import { useStore } from "../../../Utilities/contextProvider";
import Sidebar from "../../../UI/Body/CallArea/SideBar/Sidebar";

jest.mock("../../../Utilities/contextProvider");

describe("StatesArea correct render", () => {
  test("Sidebar correct render", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        streamTech: true,
      },
    });
    render(<Sidebar />);
    expect(document.getElementById("button-close")).toBeInTheDocument();
  });

  test("Sidebar correct render", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        streamTech: true,
      },
    });

    render(<Sidebar />);
    expect(document.getElementById("button-close")).toBeInTheDocument();
    expect(document.getElementById("button-audio-on")).toBeInTheDocument();
    expect(document.getElementById("button-audio-off")).not.toBeInTheDocument();
  });
});
