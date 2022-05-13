import { useStore } from "../../../../Utilities/contextProvider";
import { observer } from "mobx-react-lite";

const ListAllAlarms = observer(() => {
  const rootstore = useStore();

  if (rootstore.datasetStore.states === []) {
    return <li>Data not Available</li>;
  } else
    return rootstore.datasetStore.alarms.map((alarm) => (
      <li
        key={alarm.severity}
        className={
          alarm.severity === "Critical"
            ? "critical-item"
            : alarm.severity === "Warning"
            ? "warning-item"
            : null
        }
      >
        {alarm.code}: {alarm.name}
      </li>
    ));
});

export default ListAllAlarms;
