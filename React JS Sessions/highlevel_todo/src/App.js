import './App.css';
import {useState} from 'react';
import Card from './components/Card';
import Popup from './components/Popup';



function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo,setSelectedTodo] = useState({});
  const [popupBool,setPopupBool] = useState(false);

  return (
    <>
        {/* <Popup/> */}
        <h1 className='app-title'>High Level Todo</h1>
        <ul>
          <li>Ongoing</li>
          <li>Completed</li>
        </ul>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
          
          <div className='todo-block'>
              <div className='todo-subblock'>
                <Card/>
              </div>
              <div className='todo-subblock'>
                <Card/>
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
