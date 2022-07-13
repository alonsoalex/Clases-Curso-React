import React from 'react'
import ItemDetailConteiner from '../itemDetailConteiner'
import Item from '../Item/Item'

const itemL = ( {items , itemsD}) => {


  
  return (
    <div >
  
     {
 items.map(({id, title, description, price , image}) =>(
      
 
<div className='m-4'>
<div>
 <Item
id={id}
 title={title}
  description={description}
   price= {price}
  image = {image}
 key={id}
      />
      </div>

     
      </div>

     )  )
     
     } 
  
      
         
</div>
    
  
 )}




 export default itemL