import { useEffect, useState, useRef } from 'react';
import './Css/ToDo.css';
import TodoItem from './TodoItem';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const add = () => {
    if (inputRef.current.value.trim()) {
      setTodos([...todos, { no: count, text: inputRef.current.value }]);
      setCount(count + 1);
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To Do list
        <div className="div-todo-add">
          <input ref={inputRef} type="text" placeholder="Add your task" className="todo-input" />
          <div onClick={add} className="todo-add-btn">ADD</div>
        </div>
        <div className="div-todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.no} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
