import Rootstore from "../../ModelStores/RootStore";

// Non-primitve variables

test("setters", () => {
  const rootstore = new Rootstore();

  // Before setters' action

  expect(rootstore.stateUIStore.logged).toBe(false);
  expect(rootstore.stateUIStore.callAccepted).toBe(false);
  expect(rootstore.stateUIStore.callEnded).toBe(true);
  expect(rootstore.stateUIStore.availabilityTech).toBe(false);
  expect(rootstore.stateUIStore.selectAvailability).toStrictEqual({
    value: "Available",
    label: "Available",
  });

  // Setters' action

  rootstore.stateUIStore.setLogged(true);
  rootstore.stateUIStore.setCallAccepted(true);
  rootstore.stateUIStore.setCallEnded(false);
  rootstore.stateUIStore.setAvailabilityTech(true);
  rootstore.stateUIStore.setSelectAvailability({
    value: "Not Available",
    label: "Not Available",
  });

  // After setters' action

  expect(rootstore.stateUIStore.logged).toBe(true);
  expect(rootstore.stateUIStore.callAccepted).toBe(true);
  expect(rootstore.stateUIStore.callEnded).toBe(false);
  expect(rootstore.stateUIStore.availabilityTech).toBe(true);
  expect(rootstore.stateUIStore.selectAvailability).toStrictEqual({
    value: "Not Available",
    label: "Not Available",
  });
});
