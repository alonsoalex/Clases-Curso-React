import React, { useState } from 'react';



const ItemCount = ( {stock, initial, onAdd, onAdd2}) => {

const  [val, setCount] =  useState(initial)
const incrementar = () =>{

  setCount(val + 1)
};
const decrementar = () =>{
  
  setCount( valAnt => valAnt > 0 ? val -1 : val) 
};
    return (
    <div>

<h2>{val}</h2>

<button className='btn btn-outline-danger' onClick={decrementar}>-</button>
<button  className='btn btn-outline-success' onClick={incrementar}>+</button>
<button className='btn btn-outline-primary' onClick ={() => {

  if(val <= stock)
  onAdd(val)
}} >Agregar al carrito</button>


    </div>
  )
}






export default ItemCount;