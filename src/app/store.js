import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import todoReducer from '../features/todo/todoSlice'


const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: [thunkMiddleware],
})

export default store;
