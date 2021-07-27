import logo from './logo.svg';
import './App.css';
import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';

// import UserHook from './components/UserHook';
// import CounterClass from './components/CounterClass';
// import CounterHook from './components/CounterHook';
// import {Route ,Switch} from 'react-router-dom';





function App() {
  return (
    <div className="App">

      {/* <Route path='/class' exact component={CounterClass}/>
      <Route path='/hooks' exact component={CounterHook}/> */}
      {/* <CounterClass/>
      <CounterHook/> */}
      {/* <UserHook/> */}
      {/* <UseMemo/> */}
      <UseCallback/>
    </div>
  );
}

export default App;
