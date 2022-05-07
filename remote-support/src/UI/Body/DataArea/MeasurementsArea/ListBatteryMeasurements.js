import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const ListBatteryMeasurements = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.batteryMeasurements.map((measurement) => (
    <li key={measurement.code} className={"battery-measurement"}>
      {measurement.name}: {measurement.value} {measurement.unitOfMeasure}
    </li>
  ));
});

export default ListBatteryMeasurements;
