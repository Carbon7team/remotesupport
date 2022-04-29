import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const RenderCriticalAlarms = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.criticalAlarms.map((alarm) => (
    <li key={alarm.code} className={"critical-item"}>
      {alarm.code}: {alarm.name}
    </li>
  ));
});

export default RenderCriticalAlarms;
