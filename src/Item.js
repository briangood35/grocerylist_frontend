import './item.css'

function Item(props) {

    return (
      <div className='Row'>
        <p>{ props.name }</p>
        <button onClick={() => props.deleteItem(props.name) }>X</button>
      </div>
    );
  }
  
  export default Item;
