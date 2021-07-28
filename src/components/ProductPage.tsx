import { useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct, useCart, useProduct } from "../hooks"

import './ProductPage.css'

export const ProductPage: React.FC = () => {

    const { id } = useParams<{ id?: string }>()

    const product = getProduct(id)

    const [amount, setAmount] = useState<number>(1)
    
    const [products, setProducts] = useCart()

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
                setProducts(['asd','qwe'])
                console.log(products)
            }}>Add to cart</button></div>
            <p>{(product.price*amount) + '$'}</p>
            
            
        </div>
    </div>

    </div> : ''}
    </>)
}