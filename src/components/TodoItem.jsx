import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button className='combtn' onClick={() => toggleTodo(todo.id)}>{todo.isDone ? '취소' : '완료'}</button>
      <button className='rembtn' onClick={() => removeTodo(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
