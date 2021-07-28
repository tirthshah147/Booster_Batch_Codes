import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import {createContext} from 'react';

export const FirstName = createContext();

function App1() {
  return (
    <div className="App">
      <FirstName.Provider value={{name:"Tirth", city:"Vadodara"}}>
        <Comp1/>
      </FirstName.Provider>
    </div>
  );
}

export default App1;




//it puts data in one file
//provider
//it provides the data, it tells who has the access of this data
//become consumers
