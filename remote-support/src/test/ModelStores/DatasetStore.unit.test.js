import Alarm from "../../ModelStores/data/Alarm";
import Measurement from "../../ModelStores/data/Measurement";
import State from "../../ModelStores/data/State";
import Rootstore from "../../ModelStores/RootStore";

const rootstore = new Rootstore();
let jsonData =
  '{"states":[{"code": "S000","name": "NomeS000","active": true},{"code": "S001","name": "NomeS001","active": false}],"alarms":[{"code": "A000","name": "NomeA000","severity": "Critical"},{"code": "A001","name": "NomeA001","severity": "Warning"}],"measurements":[{"code": "M000","name": "NomeM000","value": 30,"unitOfMeasure": "Unità di misura"},{"code": "M001","name": "NomeM001","value": 20,"unitOfMeasure": "UdM"}]}';

test("replacing and clearing an array", () => {
  // array inizialmente vuoti
  expect(rootstore.datasetStore.states).toStrictEqual([]);
  expect(rootstore.datasetStore.alarms).toStrictEqual([]);
  expect(rootstore.datasetStore.measurements).toStrictEqual([]);

  // replacing
  rootstore.datasetStore.statesFromJSON(JSON.parse(jsonData).states);
  rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
  rootstore.datasetStore.measurementsFromJSON(
    JSON.parse(jsonData).measurements
  );

  // matching
  expect(rootstore.datasetStore.states).toStrictEqual([
    new State("S000", "NomeS000", true),
    new State("S001", "NomeS001", false),
  ]);
  expect(rootstore.datasetStore.alarms).toStrictEqual([
    new Alarm("A000", "NomeA000", "Critical"),
    new Alarm("A001", "NomeA001", "Warning"),
  ]);
  expect(rootstore.datasetStore.measurements).toStrictEqual([
    new Measurement("M000", "NomeM000", 30, "Unità di misura"),
    new Measurement("M001", "NomeM001", 20, "UdM"),
  ]);

  expect(rootstore.datasetStore.states[0].Code).toStrictEqual("S000");
  expect(rootstore.datasetStore.states[0].Name).toStrictEqual("NomeS000");
  expect(rootstore.datasetStore.states[0].Active).toStrictEqual(true);
  expect(rootstore.datasetStore.states[1].Code).toStrictEqual("S001");
  expect(rootstore.datasetStore.states[1].Name).toStrictEqual("NomeS001");
  expect(rootstore.datasetStore.states[1].Active).toStrictEqual(false);

  expect(rootstore.datasetStore.alarms[0].Code).toStrictEqual("A000");
  expect(rootstore.datasetStore.alarms[0].Name).toStrictEqual("NomeA000");
  expect(rootstore.datasetStore.alarms[0].Severity).toStrictEqual("Critical");
  expect(rootstore.datasetStore.alarms[1].Code).toStrictEqual("A001");
  expect(rootstore.datasetStore.alarms[1].Name).toStrictEqual("NomeA001");
  expect(rootstore.datasetStore.alarms[1].Severity).toStrictEqual("Warning");

  expect(rootstore.datasetStore.measurements[0].Code).toStrictEqual("M000");
  expect(rootstore.datasetStore.measurements[0].Name).toStrictEqual("NomeM000");
  expect(rootstore.datasetStore.measurements[0].Value).toStrictEqual(30);
  expect(rootstore.datasetStore.measurements[0].UnitOfMeasure).toStrictEqual(
    "Unità di misura"
  );
  expect(rootstore.datasetStore.measurements[1].Code).toStrictEqual("M001");
  expect(rootstore.datasetStore.measurements[1].Name).toStrictEqual("NomeM001");
  expect(rootstore.datasetStore.measurements[1].Value).toStrictEqual(20);
  expect(rootstore.datasetStore.measurements[1].UnitOfMeasure).toStrictEqual(
    "UdM"
  );

  // clearing

  rootstore.datasetStore.resetStates();
  rootstore.datasetStore.resetAlarms();
  rootstore.datasetStore.resetMeasurements();

  // maching empty
  expect(rootstore.datasetStore.states).toStrictEqual([]);
  expect(rootstore.datasetStore.alarms).toStrictEqual([]);
  expect(rootstore.datasetStore.measurements).toStrictEqual([]);
});

test("getters with filters", () => {
  // array inizialmente vuoti
  expect(rootstore.datasetStore.states).toStrictEqual([]);
  expect(rootstore.datasetStore.alarms).toStrictEqual([]);
  expect(rootstore.datasetStore.measurements).toStrictEqual([]);

  // replacing
  rootstore.datasetStore.statesFromJSON(JSON.parse(jsonData).states);
  rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
  rootstore.datasetStore.measurementsFromJSON(
    JSON.parse(jsonData).measurements
  );

  // filter by state activity
  expect(rootstore.datasetStore.activeStates).toStrictEqual([
    new State("S000", "NomeS000", true),
  ]);
  expect(rootstore.datasetStore.notActiveStates).toStrictEqual([
    new State("S001", "NomeS001", false),
  ]);

  // filter by alarm severity
  expect(rootstore.datasetStore.criticalAlarms).toStrictEqual([
    new Alarm("A000", "NomeA000", "Critical"),
  ]);
  expect(rootstore.datasetStore.warningAlarms).toStrictEqual([
    new Alarm("A001", "NomeA001", "Warning"),
  ]);

  // filter by measurement type
});
