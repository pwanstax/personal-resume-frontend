import { useState, useEffect, useContext, useRef } from "react";
import { apiClient } from "../configs/axiosInstance";

const useFetchTodos = (toggleTodoChange, isTodoChange, setError) => {
  const [todos, setTodos] = useState([]);

  // ----------- START get todo ----------- //
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await apiClient.get("/todos");
        setTodos(response.data.data.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchTodo();
  }, [setError, isTodoChange]);

  // ----------- END get todo ----------- //

  // ----------- START Delete todo ----------- //
  const handleDeleteTodo = async (id) => {
    try {
      await apiClient.delete(`/todo/${id}`);
      toggleTodoChange();
    } catch (err) {
      setError(err);
    }
  };
  // ----------- END Delete todo ----------- //

  // ----------- START Update todo ----------- //
  const handleUpdateTodo = async (
    id,
    title,
    description,
    star,
    done,
    onIt,
    dueDate,
    type
  ) => {
    const data = {
      title: title,
      description: description,
      star: star,
      done: done,
      onIt: onIt,
      dueDate: dueDate,
      type: type,
    };
    try {
      await apiClient.put(`/todo/${id}`, data);
      toggleTodoChange();
    } catch (err) {
      setError(err);
    }
  };
  // ----------- END Update todo ----------- //

  if (todos === null) {
    setTodos([]);
  }
  return [todos, handleDeleteTodo, handleUpdateTodo];
};
export default useFetchTodos;
