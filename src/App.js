import './App.css';
import Item from './Item'

function App() {
  return (
    <div className='App'>
      <h1>Grocery List!</h1>
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
