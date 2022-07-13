import React from 'react'
import CartWidgetSvg from '../CartWidgetSvg';


export const CartWidget = ({count}) => {
  return (
    <button>
{count}

    <CartWidgetSvg/></button>
  )
}

export default CartWidget;