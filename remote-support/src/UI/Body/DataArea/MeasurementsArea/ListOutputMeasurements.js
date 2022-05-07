import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const ListOutputMeasurements = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.outputMeasurements.map((measurement) => (
    <li key={measurement.code} className="output-measurement">
      {measurement.name}: {measurement.value} {measurement.unitOfMeasure}
    </li>
  ));
});

export default ListOutputMeasurements;
