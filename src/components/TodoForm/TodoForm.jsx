import './styles.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/todo/todoApi';
import { showErrorToast } from '../Toast/toastConfig';


const TodoForm = () => {

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);


  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.todos);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue !== '') {
      dispatch(addTodo(inputValue))
        .then(() => {
          setInputValue('');
        })
        .catch(() => {
          showErrorToast(error);
        });

    } else {
      setInputError(true);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className={`todo-form-container ${inputError ? 'shake' : ''}`}>
        <input
          className={`todo-form-input ${inputError ? 'error' : ''}`}
          type="text"
          placeholder="Enter new to do"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
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
