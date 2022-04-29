import State from "../../../ModelStores/data/State";

let state = new State("Code", "Name", true);
test("getters for a state all initialized", () => {
  expect(state.code).toBe("Code");
  expect(state.name).toBe("Name");
  expect(state.active).toBe(true);
});

let stateDefault = new State();
test("getters for a default state", () => {
  expect(stateDefault.code).toBe("");
  expect(stateDefault.name).toBe("");
  expect(stateDefault.active).toBe(false);
});
