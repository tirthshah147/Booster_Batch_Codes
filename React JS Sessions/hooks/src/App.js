import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterHook from './components/CounterHook';
import {Route ,Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Route path='/class' exact component={CounterClass}/>
      <Route path='/hooks' exact component={CounterHook}/>
      {/* <CounterClass/>
      <CounterHook/> */}
    </div>
  );
}

export default App;
