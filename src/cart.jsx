import React, { useState } from 'react';


function Cart(props) {
 
  return (
    
      <div className='w-60 h-60 m-20'>
        <div>
       <img src={props.source1} className='h-14 w-14' ></img>
        <h5 className={`${props.name1}`}>{props.name1}</h5>
        </div>
        <h6>{props.price1}</h6>
      </div>
    );
  

}

export default Cart;
