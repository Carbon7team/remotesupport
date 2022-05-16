import { render } from "@testing-library/react";
import { useStore } from "../../Utilities/contextProvider";
import View from "../../UI/View";

jest.mock("../../Utilities/contextProvider");

describe("View correct render", () => {
  test("View logged", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        logged: true,
      },
    });
    render(<View />);
    expect(document.getElementById("view-wrapper")).toBeInTheDocument();
  });

  test("View not logged", () => {
    useStore.mockReturnValue({
      stateUIStore: {
        logged: false,
      },
    });
    render(<View />);
    expect(document.getElementById("view-wrapper")).toBeInTheDocument();
  });
});
