import Measurement from "../../../ModelStores/data/Measurement";

describe("Measurements type test", () => {
  let measurement = new Measurement("Code", "Name", 50.4, "V");
  test("getters for a measurement all initialized", () => {
    expect(measurement.code).toBe("Code");
    expect(measurement.name).toBe("Name");
    expect(measurement.value).toBe(50.4);
    expect(measurement.unitOfMeasure).toBe("V");
  });

  let measurementDefault = new Measurement();
  test("getters for a default measurement", () => {
    expect(measurementDefault.code).toBe("");
    expect(measurementDefault.name).toBe("");
    expect(measurementDefault.value).toBe(NaN);
    expect(measurementDefault.unitOfMeasure).toBe("");
  });
});
