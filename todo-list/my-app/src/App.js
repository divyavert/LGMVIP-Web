
import './App.css';
import TodoList from './componets/TodoList';

function App() {
  return (<>
  <div className='heading'><h1> To-do list</h1></div>
    
    <div className='to-contatiner'>
      
      <TodoList />
    </div>
    </>
   
  );
}

export default App;
