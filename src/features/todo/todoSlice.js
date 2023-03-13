import { createSlice } from '@reduxjs/toolkit'
import { getTodos, addTodo, updateTodo, deleteTodo } from './todoApi';
import { showErrorToast } from '../../components/Toast/toastConfig';


const initialState = {
  todos: [],
  status: '',
  completedTodos: 0,
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
        state.completedTodos = action.payload.reduce((acc, todo) => {
          return todo.checked ? acc + 1 : acc;
        }, 0);
      })
      .addCase(getTodos.rejected, (state) => {
        state.status = "failed";
        showErrorToast('Failed to get TODO!')
      })
      // addTodo
      .addCase(addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = "success";
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state) => {
        state.status = "failed";
        showErrorToast('Failed to add TODO!')
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
          state.completedTodos += checked ? 1 : -1;
        }
      })
      .addCase(updateTodo.rejected, (state) => {
        state.status = "failed";
        showErrorToast('Failed to update TODO!')
      })
      // deleteTodo
      .addCase(deleteTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "success";
        const deletedTodoById = action.meta.arg;
        const indexToDelete = state.todos.findIndex((todo) => todo.id === deletedTodoById);

        if (indexToDelete !== -1) {
          if (state.todos[indexToDelete].checked) {
            state.completedTodos-= 1;
          }
          state.todos.splice(indexToDelete, 1);
        }
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.status = "failed";
        showErrorToast('Failed to delete TODO!')
      });
  }
})

export default todoSlice.reducer;
