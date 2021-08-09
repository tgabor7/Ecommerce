import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { bindActionCreators } from "redux"
import { getProduct, useCart, useProduct, useSessionStorage } from "../hooks"
import { acionCreators } from "../state"

import './ProductPage.css'

export const ProductPage: React.FC = () => {

    const { id } = useParams<{ id?: string }>()

    const [loading, product] = useProduct(id ? id : '')

    const [amount, setAmount] = useState<number>(1)
    

    const [value, setValue] = useSessionStorage('cart')

    return (<>{product ? <div><div className='card'>
        <div className='card-header'>
            <div className='card-title'>
                {product.name}
            </div>
        </div>
        <div className='card-content'>
            {product.description}
        </div>
        <div className='card-footer'>
            

            <div className='container'>
            <div className='price-container'><div>Amount:</div><input className='number-input' value={amount} onChange={e=>{setAmount(parseInt(e.target.value))}} type='number'></input></div>
            <button className='button is-primary is-pulled-right' onClick={()=>{
                setValue(value ? value.concat([{product: product, amount: amount}]) : [{product: product, amount: amount}])
            }}>Add to cart</button></div>
            <p>{(product.price*amount) + '$'}</p>
            
            
        </div>
    </div>

    </div> : ''}
    </>)
}