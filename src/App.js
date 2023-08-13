import './App.css';
import Item from './Item'
import { useState } from 'react'

function App() {

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    if (list.findIndex((i) => i === value) !== -1) return;
    let temp = list;
    temp.push(value);
    setList(temp);
    setValue("");
  }

  const deleteItem = (name) => {
    let temp = list.filter((item) => item !== name);
    setList(temp);
  }

  return (
    <div className='App'>
      <h1>Grocery List!</h1>
      <div className='center'>
        <div className='Add-Box'>
          <div className='Row'>
            <input type="text" value={value} onChange={(e) => {setValue(e.target.value)}}/>
            <button onClick={addItem}>Add</button>
          </div>
        </div>
      </div>
      <div className='center'>
        <div className='Item-Box'>
          {list.length > 0 && list.map((item) => <Item name={item} deleteItem={deleteItem}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
