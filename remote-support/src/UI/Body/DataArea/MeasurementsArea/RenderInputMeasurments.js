import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const RenderInputMeasurements = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.inputMeasurements.map((measurement) => (
    <li key={measurement.code} className="input-measurement">
      {measurement.name}: {measurement.value} {measurement.unitOfMeasure}
    </li>
  ));
});

export default RenderInputMeasurements;
