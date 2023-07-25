import './App.css';
import Item from './Item'
import AddBox from './addbox'
import { useState } from 'react'

function App() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div className='App'>
      <h1>Grocery List!</h1>
      <div className='center'>
        <div className='Add-Box'>
          <AddBox />
        </div>
      </div>
      <div className='center'>
        <div className='Item-Box'>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
