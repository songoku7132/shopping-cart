import '../styles/Shop.css'
import img from '../img/homePage.jpg'
import React, { useState, useEffect } from 'react';

const Shop = (props) => {
    return (
        <div className="shopPage">
          <p className='shopTitle'>Shop</p>
          <div className='goodsBox'>
            <div className='product'>
                <img src={img} />
                <div className='addProduct'>
                    {/* <button onClick={() => addCount(1)}>Add</button> */}
                    <button onClick={() => props.onClick(1)}>Add</button>
                    <input id='input1'></input>
                </div>
            </div>
            <div className='product'>
                <img src={img} />
                <div className='addProduct'>
                    {/* <button onClick={() => addCount(2)}>Add</button> */}
                    <button onClick={() => props.onClick(2)}>Add</button>
                    <input id='input2'></input>
                </div>
            </div>
            <div className='product'>
                <img src={img} />
                <div className='addProduct'>
                    {/* <button onClick={() => addCount(3)}>Add</button> */}
                    <button onClick={() => props.onClick(3)}>Add</button>
                    <input id='input3'></input>
                </div>
            </div>
            <div className='product'>
                <img src={img} />
                <div className='addProduct'>
                    {/* <button onClick={() => addCount(4)}>Add</button> */}
                    <button onClick={() => props.onClick(4)}>Add</button>
                    <input id='input4'></input>
                </div>
            </div>
          </div>
        </div>
      );
}

export default Shop;



    // const [count, setCount] = useState(0);

    // const addCount = (i) => {
    //     const el = document.getElementById(`input${i}`)
    //     let num = parseInt(el.value)
    //     setCount(prevCount => prevCount + num)
    // }

    // const print = () => {
    //     const i = document.getElementById('input1')
    //     console.log(i.value)
    // }
