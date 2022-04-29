import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";

const RenderNotActiveStates = observer(() => {
  const rootstore = useStore();

  return rootstore.datasetStore.notActiveStates.map((state) => (
    <li key={state.code} className={"not-active-item"}>
      {state.code}: {state.name}
    </li>
  ));
});

export default RenderNotActiveStates;
