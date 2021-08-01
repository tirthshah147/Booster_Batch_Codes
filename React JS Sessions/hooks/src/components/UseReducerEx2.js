import React,{useState,useReducer} from 'react';
import Todo from './Todo';


export const ACTIONS = {
  ADD_TODO : 'add_todo',
  TOGGLE_TODO : 'toggle_todo',
  DELETE_TODO : 'delete_todo'
}

function reducer(todos,action) {
 switch (action.type) {
   case ACTIONS.ADD_TODO:
     return [...todos, newTodo(action.payload.name)]
     break;
   case ACTIONS.TOGGLE_TODO:
     return todos.map(todo => {
       if (todo.id === action.payload.id) {
         return {...todo, complete: !todo.complete}
       }
       return todo;
     })
     break;
   case ACTIONS.DELETE_TODO:
     return todos.filter(todo => todo.id !== action.payload.id)
     break;
   default:
     return todos;
     break;
 }
}

function newTodo(name) {
  return {id:Date.now(), name:name, complete:false}
}

export default function UseReducerEx1() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name,setName] = useState('');
  // const [count,setCount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}})
    setName('')
  }

  console.log(todos);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={name}
        onChange={event => setName(event.target.value)}/>
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </>
  )
}
