import React from 'react';
import ItemCount from '../ItemCount';

const ListContainer = ({geeting}) => {
  return <div>{geeting}
  <ItemCount stock={5} initial={1} onAdd ={(n)=> alert(`agregado ${n}`) }/>
  
  </div> 


};

export default ListContainer