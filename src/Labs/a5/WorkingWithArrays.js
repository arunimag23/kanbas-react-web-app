import { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const API_BASE = process.env.REACT_APP_API_LAB;
  const API = `${API_BASE}/a5/todos`;
  const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
      const [todos, setTodos] = useState([]);
      console.log(todos);
      const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
      };
      const removeTodo = async (todo) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
          setTodos(response.data);
      };    
      const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
      }; 
      const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };
        const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo) => {
    try {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  } catch (error) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }

  };

  const updateTodo = async () => {
    try {
    const response = await axios.put(
      `${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (
      t.id === todo.id ? todo : t)));
    setTodo({});
  } catch (error) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }

  };


       
      useEffect(() => {
        fetchTodos();
      }, []);    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: e.target.value })}/>
      <a href={`${API}/${todo.id}`}
         className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
        <a href={`${API}/${todo.id}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
            <a href={`${API}/create`}
            className="btn btn-primary me-2">
            Create Todo
            </a>
            <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
         className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>
      <h3>Updating property of an item in an Array</h3>
      <input type = "checkbox"
        onChange={() => setTodo({ ...todo,
            completed: !todo.completed })}
        checked = {todo.completed}
        name = "Completed"/>
        <label for = "Completed"> Completed</label>
        <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2" >
        Completed Todo ID = {todo.id}
      </a>
      <br/>

      <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
       <a href={`${API}/${todo.id}/description/${todo.description}`}
         className="btn btn-primary me-2">
        Describe ToDo ID = {todo.id}
      </a>
      <br/>
      <br/>
      <textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      />
      <br/>
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
      />
      <br/>
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <br/>
      <button onClick={postTodo} 
              className="btn btn-warning mb-2 w-100">
        Post Todo
      </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>
      <input value={todo.id}
         onChange={(e) => setTodo({ ...todo,
          id: e.target.value })} />
      <input value={todo.title}
         onChange={(e) => setTodo({ ...todo,
          title: e.target.value })} />
      <button onClick={createTodo}
              className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
              className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      {/* <button
        onClick={() => deleteTodo(todo)}
        className="btn btn-danger float-end ms-2 ">
        Delete
      </button> */}
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
  
  
      <ul className="list-group">
        {console.log(todos)}
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
                <button
                  onClick={() => fetchTodoById(todo.id)}
                  className="btn btn-warning me-2 float-end" >
                  Edit
                </button>
                 <button
                  onClick={() => removeTodo(todo)}
                  className="btn btn-danger float-end" >
                  Remove
                </button>
                  <input
                checked={todo.completed}
                type="checkbox" readOnly
                 />
                {todo.title}
                <p>{todo.description}</p>
                <p>{todo.due}</p>
            </li>
        ))}
      </ul>
      


      </div>
      
    );
  }
  export default WorkingWithArrays;