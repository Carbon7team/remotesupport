import { create } from "react-test-renderer";
import Login from "../../../UI/Login/Login";

describe("Login render", () => {
  test("Login render", () => {
    let tree = create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
