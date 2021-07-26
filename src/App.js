import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
