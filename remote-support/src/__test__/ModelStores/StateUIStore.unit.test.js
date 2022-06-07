import Rootstore from "../../ModelStores/RootStore";

// Non-primitve variables

describe("StateUIStore test", () => {
  const rootstore = new Rootstore();
  test("setters", () => {
    // Before setters' action

    expect(rootstore.stateUIStore.logged).toBe(false);
    expect(rootstore.stateUIStore.callAccepted).toBe(false);
    expect(rootstore.stateUIStore.callEnded).toBe(true);
    expect(rootstore.stateUIStore.availabilityTech).toBe(false);
    expect(rootstore.stateUIStore.selectAvailability).toStrictEqual({
      value: "Available",
      label: "Available",
    });
    expect(rootstore.stateUIStore.idTech).toBe(undefined);
    expect(rootstore.stateUIStore.tokenAuth).toBe(undefined);
    expect(rootstore.stateUIStore.requestReceived).toBe(false);
    expect(rootstore.stateUIStore.nameClient).toBe(null);
    expect(rootstore.stateUIStore.surnameClient).toBe(null);
    expect(rootstore.stateUIStore.emailClient).toBe(null);
    expect(rootstore.stateUIStore.usernameClient).toBe(null);

    // Setters' action

    rootstore.stateUIStore.setLogged(true);
    rootstore.stateUIStore.setCallAccepted(true);
    rootstore.stateUIStore.setCallEnded(false);
    rootstore.stateUIStore.setAvailabilityTech(true);
    rootstore.stateUIStore.setSelectAvailability({
      value: "Not Available",
      label: "Not Available",
    });
    rootstore.stateUIStore.setIdTech("IdTech");
    rootstore.stateUIStore.setTokenAuth("Token");
    rootstore.stateUIStore.setRequestReceived(true);
    rootstore.stateUIStore.setNameClient("Nome");
    rootstore.stateUIStore.setSurnameClient("Cognome");
    rootstore.stateUIStore.setEmailClient("email@email.com");
    rootstore.stateUIStore.setUsernameClient("username");

    // After setters' action

    expect(rootstore.stateUIStore.logged).toBe(true);
    expect(rootstore.stateUIStore.callAccepted).toBe(true);
    expect(rootstore.stateUIStore.callEnded).toBe(false);
    expect(rootstore.stateUIStore.availabilityTech).toBe(true);
    expect(rootstore.stateUIStore.selectAvailability).toStrictEqual({
      value: "Not Available",
      label: "Not Available",
    });
    expect(rootstore.stateUIStore.idTech).toBe("IdTech");
    expect(rootstore.stateUIStore.tokenAuth).toBe("Token");
    expect(rootstore.stateUIStore.requestReceived).toBe(true);
    expect(rootstore.stateUIStore.nameClient).toBe("Nome");
    expect(rootstore.stateUIStore.surnameClient).toBe("Cognome");
    expect(rootstore.stateUIStore.emailClient).toBe("email@email.com");
    expect(rootstore.stateUIStore.usernameClient).toBe("username");
  });
});
