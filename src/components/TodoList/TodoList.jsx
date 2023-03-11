import "./styles.css";
import { useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem/TodoListItem";


const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    console.log(todoId);
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    console.log(todoId, isChecked);
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {/* Fix an ability to render todos */}
        {
          todos.map(({id, label, checked}) => {
            return <TodoListItem onCheck={toggleCheck} checked={checked} onDelete={handleDelete} label={label}/>
          })
        }
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
