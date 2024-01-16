import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Form = () => {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
  };

  const handleClick = () => {
    if (task.trim() !== "") 
    {
      if (listTasks.length > 0) {
        setListTasks([...listTasks, task]);
      } 
      else 
      {
        setChecked(false);
        setListTasks([task]);
      }
      setTask("");
    } 
    else {
      alert("Please, I need you write something...thanks.");
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="task"
          placeholder="Add an element..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <div class="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </div>
      <List listTasks={listTasks} setListTasks={setListTasks} handleOnChange={handleOnChange} checked={checked}/>
    </>
  );
};

const List = ({ listTasks, setListTasks, handleOnChange, checked}) => {

  const handleDeleteClick = (index, checked) => {
    if (checked === true) {
      const updatelistTasks = [...listTasks];
      updatelistTasks.splice(index, 1);
      setListTasks(updatelistTasks);
    } else {
      alert(
        "Please, I need you select the task when one click in the checkbox."
      );
    }
  };

  return (
    <>
      {listTasks.length > 0 && <h2>List of Tasks</h2>}
      <ul className="list-group">
        {listTasks.map(function (element, index) {
          return (
            <li className="list-group-item" key={index}>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value={checked}
                onChange={handleOnChange}
              />
              <p>{element}</p>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                name="Delete"
                onClick={() => handleDeleteClick(index, checked)}
              >
                Delete
              </button>
            </li>
          );
        }, this)}
      </ul>
    </>
  );
};

function App() {
  return (
    <div className="container-lg my-4">
      <div className="p-5 mb-4 bg-dark text-white rounded-3">
        <h1> Task ToDoList</h1>
      </div>
      <Form />
      <br />
      <p className="read-the-docs"> By: Lena Liz Martinez Guzman</p>
    </div>
  );
}

export default App;
