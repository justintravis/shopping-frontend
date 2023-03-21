import React, { useState } from 'react'
import { Todos } from './models/models';

const TodoList = ({ todos }: Todos) => {
  return (
    <div className="App">
      { todos?.length > 0 && todos.map((todo) => {
        return <p key={ todo.id }>{ `${ todo.id } - ${ todo.todo } `}</p>
      })}
    </div>
  )
}

export default TodoList