import { observer } from 'mobx-react-lite';
import { useStore } from '../Utilities/contextProvider';
import { useInstance } from '../Utilities/useInstance';
import Header from './Header/Header';
import Login from './Login/Login';
import Body from './Body/Body';
import ViewVM from './ViewVM';

const View = observer(() => {

  const {
    logged,
  } = useInstance(new ViewVM(useStore()));

  return (
    <div id='view-wrapper'>
     
      <Header/>

      {!logged && (
        <Login/>
      )}

      {logged && (
        <Body/>
      )}

    </div>
  )
})


export default View;
