import React , { useEffect, useState } from 'react';

import ItemCount from '../ItemCount';

import ItemList from '../ItemList/itemL';
import products from '../products.json'



const ListContainer = ({geeting}) => {
  const [list, setlist] = useState([])

   useEffect(() => {

    const getData = new Promise((resolve,) => {
     
      setTimeout(() => {
        
        resolve(list)
      }, 2000);
    })
      .then((data) => {
        setlist(products)
 console.log(data)
         
     
      })
     
  }, [])



return (<div>

    {geeting}
  
   
   <ItemList  items={list}/>

    
  <ItemCount stock={5} initial={1} onAdd ={(n)=> alert(`agregado ${n}`) }/>
   

   </div> 
 )


};

export default ListContainer