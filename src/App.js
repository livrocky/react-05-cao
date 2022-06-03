import './App.css';

function App() {
  return (
    <div className='App'>
      <form className='todoList container'>
        <h1>You have 3 Todos</h1>
        <p>
          <div className='taskDisplay'>
            task 1
            <div className='x'>
              <i class='fa fa-times-circle' aria-hidden='true'></i>
            </div>
          </div>
        </p>
        <p>task 2</p>
        <p>task 3</p>
        <div className='enterInput'>
          <input type='text' name='task' className='task' placeholder='Enter item' />
          <button className='submit-btn'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
