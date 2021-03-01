import React from 'react'

import bakShop from './../../assets/bakery.jpg'
import pizShop from './../../assets/pizza.jpg'

import './style.scss'
const Directory = props =>{
    return(
        <div className='directory'>
            <div className='wrap'>
                <div className='item' style={{backgroundImage:`url(${bakShop})`}}>
                    <a className='fancyButton'>
                        Shop from Bakery
                    </a>
                </div>
                <div className='item' style={{backgroundImage:`url(${pizShop})`}}>
                    <a className='fancyButton'>
                        Shop from Pizzeria
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Directory