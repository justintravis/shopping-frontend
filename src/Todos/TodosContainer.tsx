import React, { useState, useRef } from 'react'
import { Todos } from './models/models';

import TodoList from './TodoList'
import TodoForm from './TodoForm';

const TodosContainer = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    setTodo('');
    setTodos([
      ...todos,
      { id: Date.now(), todo, isDone: false }
    ]);
  }

  return (
    <div>
        <TodoForm todo={todo} handleAdd={handleAdd} setTodo={setTodo} />
        <TodoList todos={todos} />
      </div>
  )
}

export default TodosContainer