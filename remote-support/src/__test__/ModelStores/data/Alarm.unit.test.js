import Alarm from "../../../ModelStores/data/Alarm";

describe("Alarm type test", () => {
  let alarm = new Alarm("Code", "Name", "Critical");
  test("getters for an alarm all initialized", () => {
    expect(alarm.code).toBe("Code");
    expect(alarm.name).toBe("Name");
    expect(alarm.severity).toBe("Critical");
  });

  let alarmDefault = new Alarm();
  test("getters for a default alarm", () => {
    expect(alarmDefault.code).toBe("");
    expect(alarmDefault.name).toBe("");
    expect(alarmDefault.severity).toBe("");
  });
});
