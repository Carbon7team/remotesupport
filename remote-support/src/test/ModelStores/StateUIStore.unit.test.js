import StateUIStore from "../../ModelStores/StateUIStore";
import Rootstore from "../../ModelStores/RootStore";
import Peer from "peerjs";

let rootstore = new Rootstore();
let stateUIStore = new StateUIStore(rootstore);

// Non-primitve variables
const peer = new Peer();
// const stream = new MediaStream();

test("setters and getters", () => {
  // Before setters' action

  expect(stateUIStore.logged).toBe(false);
  expect(stateUIStore.callAccepted).toBe(false);
  expect(stateUIStore.callEnded).toBe(true);
  expect(stateUIStore.jsonData).toBe(null);
  expect(stateUIStore.availabilityTech).toBe(false);

  // Setters' action

  stateUIStore.setLogged(true);
  stateUIStore.setCallAccepted(true);
  stateUIStore.setCallEnded(false);
  stateUIStore.setJsonData("JsonData");
  stateUIStore.setAvailabilityTech(true);

  // After setters' action

  expect(stateUIStore.logged).toBe(true);
  expect(stateUIStore.callAccepted).toBe(true);
  expect(stateUIStore.callEnded).toBe(false);
  expect(stateUIStore.jsonData).toBe("JsonData");
  expect(stateUIStore.availabilityTech).toBe(true);
});
