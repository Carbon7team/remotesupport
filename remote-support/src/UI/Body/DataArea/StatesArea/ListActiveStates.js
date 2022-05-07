import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const ListActiveStates = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.activeStates.map((state) => (
    <li key={state.code} className={"active-item"}>
      {state.code}: {state.name}
    </li>
  ));
});

export default ListActiveStates;
