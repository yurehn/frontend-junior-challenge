import './styles.css';
import { useSelector } from 'react-redux';


const TodoResults = () => {
  const completedTodos = useSelector((state) => state.todos.completedTodos);

  return <div className="todo-results">Done: {completedTodos}</div>;
};

export default TodoResults;
