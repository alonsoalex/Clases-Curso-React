import React from 'react'
import ItemCount from '../ItemCount'
const ItemDetail = ({items}) => {

   

  return (
     <div className='container border w-50  p-2 m-2 d-flex card'>
       
 {


    
 items.map(({ title, price,}) =>(
      

      
 
<div className='m-4' >
<div>
    <h3>{title}</h3>
    <p>{price}</p>
    <div>
    <ItemCount stock={5} initial={1} onAdd ={(n)=> alert(`agregado ${n}`) }/>
</div>
      </div>
      </div>


     )  )
     
     }  
    
    </div>
  )
}

export default ItemDetail

