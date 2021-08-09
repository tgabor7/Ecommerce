import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Product, ProductDetails, useCart, useSessionStorage } from "../hooks"
import './ShoppingCart.css'

export const ShoppingCartPage:React.FC = ()=>{
    

    const [products, setProducts] = useSessionStorage('cart')

    return (<>{products ? <div className='card'>
        <div className='cart-header'>
            Your items:
            <hr></hr>
        </div>
        {products.map((e:ProductDetails)=>{
            return <div className='cart-item'>
                <div className='cart-item-name'>
                {e.product.name}
                </div>
                <div className='cart-item-amount'>
                    <input type='number' value={e.amount} onChange={t=>{
                        
                        }} /><div style={{'fontSize':'24px','paddingLeft':'5px'}}>X</div>
                </div>
                <div className='cart-item-price'>
                    {'$'+e.product.price*e.amount}
                </div>
                </div>
        })}
        <div className='cart-footer'>
            <hr></hr>
        <div className='cart-item'>
            <div className='cart-item-name'>
                Total:
            </div>
            <div className='cart-item-price'>
                {'$' + 0}
            </div>
        </div>
        </div>
    </div>:''}
        <button onClick={()=>{
            setProducts(null)
        }}>Clear cart</button>
    </>)
}