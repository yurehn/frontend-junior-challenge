import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoApi';


const TodoForm = () => {

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);


  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (inputValue !== '') {
      dispatch(addTodo(inputValue))
      setInputValue(''); 
    } else {
      setInputError(true);
    }
  };

  const handleChange = (event) => {
    if (inputError) {
      setInputError(false);
    }
    setInputValue(event.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className={`todo-form-container ${inputError ? 'shake' : ''}`}>
        <input
          className={`todo-form-input ${inputError ? 'error' : ''}`}
          type="text"
          placeholder="Enter new to do"
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setInputError(false)}
        />
        {
          inputError && (
            <div className="helper-text">Please enter a value</div>
          )
        }
      </div>
      <button className="todo-form-button" type="submit">Add to do</button>
    </form>
  )
}

export default TodoForm;
