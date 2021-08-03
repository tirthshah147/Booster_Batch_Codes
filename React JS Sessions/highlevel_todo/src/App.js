import './App.css';
import {useState} from 'react';
import Card from './components/Card';
import Popup from './components/Popup';
import Particles from 'react-particles-js';

const particlesEffect = {
  particles: {
    number :{
      value: 10,
      density: {
        enable : true,
        value_area : 100
      }
    },
    color:{
      value:"#999999"
    },
    line_linked:{
      color:"#999999"
    },
    interactivity:{
      onclick:{
        enable:true,
      }
    }
    },
    
  }

function App() {
  const todoFormat = {title:undefined,description:undefined,status:"ongoing"};
  const [todos, setTodos] = useState([]);
  const [selectedTodo,setSelectedTodo] = useState({...todoFormat});
  const [popupBool,setPopupBool] = useState(false);
  const [actionType,setActionType] = useState("");

  const closePopup = () => {
    setPopupBool(false);
    setSelectedTodo({...todoFormat});
  }

  const clickCard = (todo) => {
    console.log("Hiii");
    console.log(todo);
    setActionType("update");
    setSelectedTodo(todo);
    setPopupBool(true);
  }

  const saveTodo = (todo) => {
    const updatedTodoList = todos.map((arrTodo) => {
      if (arrTodo.id === todo.id) {
        arrTodo.title = todo.title;
        arrTodo.description = todo.description;
        arrTodo.status = todo.status;
      }
      return arrTodo;
    })

    setTodos(updatedTodoList);
    setPopupBool(false);
    setSelectedTodo({...todoFormat});
  }

  const openPopupForCreate = () => {
    console.log("Hii");
    setSelectedTodo({...todoFormat});
    setActionType("create");
    setPopupBool(true)
  }

  const createTodo = (todo) => {
    const newTodo = {id:Date.now(), ...todo};
    const newTodoList = [...todos, newTodo];
    // newTodoList.push(newTodo);
    setTodos(newTodoList);
    setPopupBool(false);
  }

  const deleteTodo = (todoId) => {
    const newTodo = todos.filter((todo) => todo.id != todoId);
    setTodos(newTodo);
  }     

  return (
    <>
        <Particles params={particlesEffect} className="particles"/>
        {popupBool ? <Popup actionType={actionType} selectedTodo={selectedTodo} closePopup={closePopup} saveTodo={saveTodo} createTodo={createTodo}/>  : ""}
        <h1 className='app-title'>High Level Todo</h1>
        <ul>
          <li>Ongoing</li>
          <li>Completed</li>
        </ul>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
          
          <div className='todo-block'>
              <div className='todo-subblock'>
                {todos.map((todo) => {
                  if (todo.status === "ongoing") {
                    return <Card key={todo.id} todo={todo} clickCard={clickCard} deleteTodo={deleteTodo}/>
                  }
                })}

                <div className='todo-card todo-addCard' onClick={openPopupForCreate}>
                  <div className='todo-title todo-add-symbol'>+</div>
                </div>
              </div>
              <div className='todo-subblock'>
              {todos.map((todo) => {
                  if (todo.status === "completed") {
                    return <Card key={todo.id} todo={todo} clickCard={clickCard} deleteTodo={deleteTodo}/>
                  }
                })}
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
