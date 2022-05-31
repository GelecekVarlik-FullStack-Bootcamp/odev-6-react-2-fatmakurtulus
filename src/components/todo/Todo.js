import Nav from '../Nav';
import React from 'react';

export default function Todo() {



  function getState(e){
    e.preve
  }
    return (
      <div>
        <h1>Todo</h1>
        <Nav />
        <div>
          <input type="text" placeholder='Todo'className='todo'/>
          <select placeholder='status' className='select'/>
          <select placeholder='category' className='select'/>
          <button className='button'>Add</button>
          <div>
            <div>
              <label>başlık</label> 
              <button>güncelle</button>
            </div>
          </div>
          </div> 
        
      </div>
    )
  }
  