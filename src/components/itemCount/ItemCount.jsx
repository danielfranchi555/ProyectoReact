import {useState} from 'react'

const ItemCount = ({initial=1, stock=15,onAdd}) => {
    const [count,setCount] = useState(0);
    const handleAdd =()=> {
             if(count < stock)
        setCount(count + 1)
    } 
    const handleResta =()=> {
          if(count >1)
        setCount(count - 1)

    }
    
   

    return (
      <div className='card w-25 '>
          <label> { count } </label>
          <br />
          <button className='  btn btn-outline-dark' onClick={handleAdd}> +</button>
          <button className='  btn btn-outline-dark ' onClick={handleResta}> - </button>
          <button className='  btn btn-outline-dark ' onClick={()=>onAdd(count)}> Agregar al carrito </button>


      </div>
    )
}

export default ItemCount