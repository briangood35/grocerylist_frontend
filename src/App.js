import './App.css';
import Item from './Item'
import { useState } from 'react'

function App() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const add = () => {
    let temp = list;
    temp.push(value);
    setList(temp);
    setValue("");
  }

  return (
    <div className='App'>
      <h1>Grocery List!</h1>
      <div className='center'>
        <div className='Add-Box'>
          <div className='Row'>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}}/>
            <button onClick={add}>Add</button>
          </div>
        </div>
      </div>
      <div className='center'>
        <div className='Item-Box'>
          {list.length > 0 && list.map((item) => <Item name={item}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
