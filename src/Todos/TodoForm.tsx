import React, { useState, useRef } from 'react'
import { Todos } from './models/models';

interface Props {
  todo: string;
  handleAdd: (e: React.FormEvent) => void;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const TodoForm = ({ todo, handleAdd, setTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <form onSubmit={ (e) => {
        // inputRef.current?.blur();
        handleAdd(e);
      }}>
        <input
          type="text"
          placeholder="Add Todo"
          value={todo}
          onChange={ (e) => setTodo(e.currentTarget.value) }
          ref={inputRef}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default TodoForm