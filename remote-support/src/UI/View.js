import { observer } from "mobx-react-lite";
import { useStore } from "../Utilities/contextProvider";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Body from "./Body/Body";
import "./View.css";

const View = observer(() => {
  const rootstore = useStore();

  const { logged } = rootstore.stateUIStore;

  return (
    <div id="view-wrapper">
      <Header />

      {!logged && <Login />}

      {logged && <Body />}
    </div>
  );
});

export default View;
