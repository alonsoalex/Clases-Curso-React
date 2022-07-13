import React  , { useEffect, useState } from 'react'

import ItemDetail from '../itemDetail/itemDetail'
const detalles = [{
           title: 'Detalles',
           price: '$$$',

}]

const ItemDetailConteiner = ({geeting}) => {
  const [list, setlist] = useState([])

  useEffect(() => {

   const getData = new Promise((resolve,) => {
    
     setTimeout(() => {
       
       resolve(list)
     }, 2000);
   })
     .then((data) => {
       setlist(detalles)
console.log(data)
        
    
     })
    
 }, [])


  return (
    
     <div >
   <ItemDetail  items={list} />
       </div>
  )
}

export default ItemDetailConteiner

