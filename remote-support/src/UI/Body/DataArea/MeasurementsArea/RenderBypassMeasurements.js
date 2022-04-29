import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const RenderBypassMeasurements = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.bypassMeasurements.map((measurement) => (
    <li key={measurement.code} className={"bypass-measurement"}>
      {measurement.name}: {measurement.value} {measurement.unitOfMeasure}
    </li>
  ));
});

export default RenderBypassMeasurements;
