import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./features/todo/todoApi";
import TodoList from "./components/TodoList/TodoList";
import TodoResults from "./components/TodoResults/TodoResult";


const App = () => {

  const dispatch = useDispatch();
 
  useEffect(() => {
      dispatch(getTodos());
  }, [dispatch])
  
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
    </div>
  );
};

export default App;
