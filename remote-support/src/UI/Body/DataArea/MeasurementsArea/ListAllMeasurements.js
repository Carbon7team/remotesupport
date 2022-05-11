import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const ListAllMeasurements = observer(() => {
  const rootstore = useStore();

  const setClassName = (code) => {
    if (code >= "M015" && code <= "M031") return "battery-measurement";
    else if (
      (code >= "M032" && code <= "M038") ||
      (code >= "M064" && code <= "M069")
    )
      return "input-measurement";
    else if (
      (code >= "M000" && code <= "M014") ||
      (code >= "M048" && code <= "M063")
    )
      return "output-measurement";
    else if (
      (code >= "M039" && code <= "M045") ||
      (code >= "M070" && code <= "M075")
    )
      return "bypass-measurement";
  };

  return rootstore.datasetStore.measurements.map((measurement) => (
    <li key={measurement.code} className={setClassName(measurement.code)}>
      {measurement.name}: {measurement.value} {measurement.unitOfMeasure}
    </li>
  ));
});

export default ListAllMeasurements;
