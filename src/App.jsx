import "./App.css";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./features/todo/todoApi";
import TodoList from "./components/TodoList/TodoList";
import TodoResults from "./components/TodoResults/TodoResult";
import TodoForm from "components/TodoForm/TodoForm";


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch])

  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
      <ToastContainer />
    </div>
  );
};

export default App;
