import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos";

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (label) => {
    const response = await axios.post(API_URL, {
      "label": label,
      "checked": false
    });
    return response.data;
});

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ id, checked }) => {
    const response = await axios.patch(`${API_URL}/${id}`, {
        checked
      }
    );
    return response.data;
});

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
});
