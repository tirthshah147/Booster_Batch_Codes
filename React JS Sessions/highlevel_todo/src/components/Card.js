import React from 'react'

export default function Card({todo,clickCard,deleteTodo}) {
  return (
    <div className='todo-card'>
      <div className='delete-symbol--small' onClick={() => deleteTodo(todo.id)}>x</div>
      <div className='todo-title' onClick={() => clickCard(todo)}>{todo.title}</div>
    </div>
  )
}
