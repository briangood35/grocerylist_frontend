import './item.css'

function Item(props) {
    return (
      <div className='Row'>
        <p>{ props.name }</p>
        <input type="checkbox" />
        <button></button>
      </div>
    );
  }
  
  export default Item;
