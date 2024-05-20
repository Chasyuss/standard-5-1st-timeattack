import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const InitialState = [
    {
      id: 1,
      title: '예시',
      content: '이건 첫번째 내용입니다',
      isDone: false,
    },
    {
      id: 2,
      title: '예시2',
      content: '이건 두번째 내용입니다',
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(InitialState);

  const addTodo = (title, content) => {
    const newTodo = {
      id: title.length,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='container'>
      <h2>투두리스트 타임어택 </h2>
      <p>----------------------------------</p>
      <TodoForm addTodo={addTodo} />
      <p>----------------------------------</p>

      <h2>Working 💦</h2>
      <TodoList todos={todos.filter(todo => !todo.isDone)} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <p>----------------------------------</p>
      <h2>Done 🎉</h2>
      <TodoList todos={todos.filter(todo => todo.isDone)} toggleTodo={toggleTodo} removeTodo={removeTodo} />

      <p>----------------------------------</p>
    </div>
  );
};

export default App;
