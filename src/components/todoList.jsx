import { useState } from 'react';

function TodoForm() {
  const [taskValue, setTaskValue] = useState('');
  const [showTask, setShowTask] = useState(false);

  function inputEnterHandler(event) {
    console.log('entering task to input');
    const inputEl = event.target;
    const ivestaReiksme = inputEl.value;
    setTaskValue(ivestaReiksme);
  }

  return (
    <form onSubmit={sendValues} className='todoList'>
      <h1>You have 3 Todos</h1>
      <div className='taskDisplay'>
        <p>
          <span className='x'>
            {/* {taskValue} */}
            <i className='fa fa-times-circle-o' aria-hidden='true'></i>
          </span>
        </p>
      </div>

      <div className='enterInputDisplay'>
        <div className='inputTask'>
          <input onChange={inputEnterHandler} value={taskValue} type='text' name='task' id='task' placeholder='Enter item' />
        </div>
        <div className='inputBtn'>
          <button onClick={sendValues} className='submit-btn'>
            {' '}
            Submit{' '}
          </button>
          {showTask && <p>{taskValue}</p>}
        </div>
      </div>
    </form>
  );

  function sendValues(event) {
    event.preventDefault();
    const taskObj = { task: taskValue };
    console.log('taskObj===', taskObj);

    setTaskValue('');
  }
  //   function displayValue() {
  //     console.log('displayValue called');
  //     setTaskValue(!taskValue);
  //   }
}

export default TodoForm;
