import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem/TodoListItem";
import { updateTodo, deleteTodo } from "../../features/todo/todoApi";
import Loader from "../Loader/Loader";


const TodoList = () => {

  const { todos, status } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (todoId) => {
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
                    // key={id} //Producto de que la API devuelve el mismo id:6 al crear un TODO, genera problemas cuando hay 2 elementos con la misma key.
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
      {
        status === 'loading' && (
          <div className="todo-list-loaderContainer">
            <Loader />
          </div>
        )
      }
    </div>
  );
};

export default TodoList;
