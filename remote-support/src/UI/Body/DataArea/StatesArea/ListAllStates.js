import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const ListAllStates = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.states.map((state) => (
    <li
      key={state.code}
      className={state.active === true ? "active-item" : "not-active-item"}
    >
      {state.code}: {state.name}
    </li>
  ));
});

export default ListAllStates;
