import React , { useState } from 'react';

import ItemCount from '../ItemCount';
import ItemList from '../ItemList/itemL';
import products from '../products.json'



const ListContainer = ({geeting}) => {
   

  

  const promesa = new Promise((resolve, reject) => {
   
   
    let promesa = true;
 
 
    setTimeout(() => {
    if (promesa) {

    resolve(products);
    } 
    else {
    reject('error');
    }
    }, 2000);
    });

  
return (
<div>

    {geeting}
   
   <ItemList  items={products}/>

    
  <ItemCount stock={5} initial={1} onAdd ={(n)=> alert(`agregado ${n}`) }/>
   

   </div> 
 )


};

export default ListContainer