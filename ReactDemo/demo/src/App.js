import './App.css';
import React, {useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';


function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Make coffe', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'Make coffe', rowAssigned: 'User two'},
    {rowNumber: 4, rowDescription: 'Drink water', rowAssigned: 'User one'}
  
  ])
  
  
  const addTodo = (description,assigned) => {
    let rowNumber = 0;
    if(todos.length > 0 ){
    rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
  
      const newTodo = {
        rowNumber: rowNumber,
        rowDescription: description, 
        rowAssigned: assigned
      }
      
      // instead of todos.push(newTodo);
      // we should use ->
      setTodos(todos => [...todos, newTodo]);
  }
  const deleteTodo = (deleteTodoRowNumber) => {

    let filtered = todos.filter((value) => {
     return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's
        </div>
        <div className='card-body'>
        <TodoTable todos={todos} deleteTodo={deleteTodo}/>
        <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
          {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && 
          <NewTodoForm addTodo={addTodo}/>
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
