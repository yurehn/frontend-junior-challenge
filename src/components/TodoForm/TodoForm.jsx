import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoApi';


const TodoForm = () => {

  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue !== '') { 
      dispatch(addTodo(inputValue)); 
      setInputValue('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form-input"
        type="text"
        placeholder="Enter new to do"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="todo-form-button" type="submit">Add to do</button>
    </form>
  )
}

export default TodoForm;
