import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const RenderWarningAlarms = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.warningAlarms.map((alarm) => (
    <li key={alarm.code} className={"critical-item"}>
      {alarm.code}: {alarm.name}
    </li>
  ));
});

export default RenderWarningAlarms;
