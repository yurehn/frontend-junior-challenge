import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem/TodoListItem";
import { updateTodo, deleteTodo } from '../../features/todo/todoApi';


const TodoList = () => {
  const {todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = async (todoId) => {
    dispatch(deleteTodo(todoId)) 
  };

  const toggleCheck = (todoId, isChecked) => {
    dispatch(updateTodo({ id: todoId, checked: !isChecked }));
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {
        todos.length === 0 ? (
          <div className="no-todos">
            Looks like you&apos;re absolutely free today!
          </div>
        ) : (
          <div className="todo-list-content">
            {
              todos.map(({ id, label, checked }) => {
                return (
                  <TodoListItem
                    onCheck={() => toggleCheck(id, checked)}
                    checked={checked}
                    onDelete={() => handleDelete(id)}
                    label={label}
                  />
                );
              })
            }
          </div>
        )
      }
    </div>
  );
};

export default TodoList;
