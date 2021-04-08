import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import UseEffect from './UseEffect'

export default function App() {
// state = { todos: [...], todoText: 'Write your todo here'}
  let todosDefault = JSON.parse(localStorage.getItem('todos')) || [];
  
  // [
  //     {id: 1, title: 'First todo', completed: false},
  //     {id: 2, title: 'Second todo', completed: true},
  //   ];

//this.state.todos
// todos

// this.setState({...})
// setTodo({...})

    const [todos, setTodo] = useState(todosDefault);
    const [todoText, setTodoText] = useState('');

    const onKeyPressHandler = (e) => {
        if ( e.which === 13 ) {
          setTodo([...todos, {id: new Date(), title: todoText, completed: false}]);
          setTodoText('');
        }
    }

    const onChangeHandler = (e) => {
      setTodoText(e.target.value);
    }

    useEffect( () => {
          localStorage.setItem('todos', JSON.stringify(todos));
        }           
    )
// [{1}, _, {3}, {4}]

    return (
      <div className="container">
        <h1>Todo app; TodoCount: {todos.length} </h1>

          <div className="input-field">
            <input 
              type="text"
              onKeyPress={onKeyPressHandler} 
              onChange={onChangeHandler} 
              value={todoText}
              placeholder="Write your todo here"
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
          <UseEffect/>
      </div>
    );
  
}