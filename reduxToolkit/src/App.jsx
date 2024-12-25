import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className='flex align-top justify-center'>

      < div className='bg-gray-700 text-center w-1/2'>

        {/* Renders the AddTodo and Todos components */}
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;