import {createSlice } from '@reduxjs/toolkit'
import { getTodos, addTodo, updateTodo, deleteTodo } from './todoApi';

const initialState = {
  todos: [],
  status: '',
  error: null,
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // getTodo
    .addCase(getTodos.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getTodos.fulfilled, (state, action) => {
      state.status = "success";
      state.todos = action.payload;
    })
    .addCase(getTodos.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
    // addTodo
    .addCase(addTodo.pending, (state) => {
      state.status = "loading";
    })
    .addCase(addTodo.fulfilled, (state, action) => {
      state.status = "success";
      state.todos.push(action.payload);
    })
    .addCase(addTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
    // updateTodo
    .addCase(updateTodo.pending, (state) => {
      state.status = "loading";
    })
    .addCase(updateTodo.fulfilled, (state, action) => {
      state.status = "success";
      const { id, checked } = action.payload;
      const foundTodo = state.todos.find((todo) => todo.id === id);

      if (foundTodo) {
        foundTodo.checked = checked;
      }
    })
    .addCase(updateTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
    // deleteTodo
    .addCase(deleteTodo.pending, (state) => {
      state.status = "loading";
    })
    .addCase(deleteTodo.fulfilled, (state, action) => {
      state.status = "success";
      const deletedTodoById = action.meta.arg;
      state.todos = state.todos.filter((todo) => todo.id !== deletedTodoById);
    })
    .addCase(deleteTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default todoSlice.reducer
