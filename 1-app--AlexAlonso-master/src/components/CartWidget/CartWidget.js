import React from 'react'
import CartWidgetSvg from '../CartWidgetSvg';
import ItemCount from '../ItemCount';

export const CartWidget = ({count}) => {
  return (
    <button>
{count}

    <CartWidgetSvg/></button>
  )
}

export default CartWidget;