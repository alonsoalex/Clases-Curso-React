import React , { useEffect, useState } from 'react';


import ItemList from '../ItemList/itemL';
import products from '../products.json'



const ListContainer = ({geeting}) => {
  const [list, setlist] = useState([])

   useEffect(() => {

    const getData = new Promise((resolve) => {
     
      setTimeout(() => {
        
        resolve(list)
      }, 2000);
    })
      .then((data) => {
   
      setlist(products)
      })
     
  }, [])
      
  
  

return (<div>

    {geeting}
  
   
   <ItemList  items={list} items2={list}/>

    
   

   </div> 
 )


};

export default ListContainer