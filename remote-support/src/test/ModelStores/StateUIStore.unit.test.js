import Rootstore from "../../ModelStores/RootStore";

// Non-primitve variables

test("setters", () => {
  const rootstore = new Rootstore();

  // Before setters' action

  expect(rootstore.stateUIStore.logged).toBe(false);
  expect(rootstore.stateUIStore.callAccepted).toBe(false);
  expect(rootstore.stateUIStore.callEnded).toBe(true);
  expect(rootstore.stateUIStore.jsonData).toBe(null);
  expect(rootstore.stateUIStore.availabilityTech).toBe(false);
  expect(rootstore.stateUIStore.selectAvailability).toStrictEqual({
    value: "Available",
    label: "Available",
  });
  expect(rootstore.stateUIStore.streamTech).toBe(undefined);

  // Setters' action

  rootstore.stateUIStore.setLogged(true);
  rootstore.stateUIStore.setCallAccepted(true);
  rootstore.stateUIStore.setCallEnded(false);
  rootstore.stateUIStore.setJsonData("JsonData");
  rootstore.stateUIStore.setAvailabilityTech(true);
  rootstore.stateUIStore.setSelectAvailability({
    value: "Not Available",
    label: "Not Available",
  });
  // rootstore.stateUIStore.setStreamTech(stream);

  // After setters' action

  expect(rootstore.stateUIStore.logged).toBe(true);
  expect(rootstore.stateUIStore.callAccepted).toBe(true);
  expect(rootstore.stateUIStore.callEnded).toBe(false);
  expect(rootstore.stateUIStore.jsonData).toBe("JsonData");
  expect(rootstore.stateUIStore.availabilityTech).toBe(true);
  expect(rootstore.stateUIStore.selectAvailability).toStrictEqual({
    value: "Not Available",
    label: "Not Available",
  });
  // expect(rootstore.stateUIStore.streamTech).toBe(stream);
});
