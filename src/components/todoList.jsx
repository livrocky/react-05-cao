import { useState } from 'react';

const [taskValue, setTaskValue] = useState;

function todoForm() {
  <form className='todoList'>
    <h1>You have 3 Todos</h1>
    <div className='taskDisplay'>
      <p>
        task 1
        <div className='x'>
          <i class='fa fa-times-circle-o' aria-hidden='true'></i>
        </div>
      </p>
    </div>
    <p>task 2</p>
    <p>task 3</p>
    <div className='enterInput'>
      <input type='text' name='task' id='task' placeholder='Enter item' />
      <button className='submit-btn'>Submit</button>
    </div>
  </form>;
}
