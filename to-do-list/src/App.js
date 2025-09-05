import React,{useState} from 'react';
import TodoList from './TodoList';

function App() {

  const [task,settask] = useState("");
  const [todo,settodo] = useState([]);

  const changeHandler = (e) => {
    settask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo=[...todo,task];
    settodo(newtodo);
    settask("");
    console.log(todo);
  }

  const deleteHandler = (indexvalue) => {
    const newtodo = todo.filter((item,index) => index!==indexvalue);
    settodo(newtodo);
  }

  return (
    <div>
      <center>
        <div className="card">
          <div className="cardbody">
            <h5 className="cardtitle">To-Do Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler} size={"25"}/>
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList listtodo={todo} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
