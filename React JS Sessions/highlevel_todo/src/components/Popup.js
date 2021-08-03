import React from 'react';
import { useState } from 'react';

export default function Popup({actionType, selectedTodo,closePopup,saveTodo,createTodo}) {
  const [id,setId] = useState(selectedTodo.id);
  const [title,setTitle] = useState(selectedTodo.title);
  const [description,setDescription] = useState(selectedTodo.description);
  const [status,setStatus] = useState(selectedTodo.status);

  console.log(id,title,description,status);

  const handleChange = (event) => {
    console.log(event.target.name);
    const elemName = event.target.name;
    const val = event.target.value;
    if (elemName === "title") {
      setTitle(val);
    }else if (elemName === "description") {
      setDescription(val);
    }else if (elemName === "status") {
      setStatus(val);
    }
  }

  const saveTodoClick = (event) => {
    event.preventDefault();
    saveTodo({id,title,description,status})
  }

  const createTodoClick = (event) => {
    event.preventDefault();
    createTodo({title,description,status});
  }
  
  

  return (
    <div className='popup-block'>
          <div className='popup-card'>
            <div className='delete-symbol--large' onClick={closePopup}>x</div>
            <form>
                <div className='popup-details'>
                  <label>Title</label> <br />
                  <input type="text" name='title' value={title} onChange={handleChange}/> <br />
                  <label>Description</label><br />
                  <textarea name='description' cols="30" rows="10" value={description} onChange={handleChange}></textarea><br />
                  <label>Status</label><br />
                  <select name="status" value={status} onChange={handleChange}>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </select><br/>
                  {actionType === "create" ? (<button className='popup-button' onClick={createTodoClick}>Create</button>) : (<button className='popup-button' onClick={saveTodoClick}>Save</button>)}
                </div>
            </form>
            
          </div>
        </div>
  )
}
