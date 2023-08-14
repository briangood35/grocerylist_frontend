import './App.css';
import Item from './Item'
import { useState, useEffect } from 'react'

function App() {

  const addr = "http://10.0.0.68:5000";

  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    if (list.findIndex((i) => i === value) !== -1) {
      setValue("");
      return;
    }
    let temp = list;
    temp.push(value);
    fetch(addr + "/add/" + value);
    setList(temp);
    setValue("");
  }

  const deleteItem = (name) => {
    let temp = list.filter((item) => item !== name);
    fetch(addr + "/remove/" + name);
    setList(temp);
  }

  useEffect(() => {
    fetch(addr)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      let temp = json.map((i) => i.item);
      console.log(temp);
      setList(temp);
    });
  }, []);

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
