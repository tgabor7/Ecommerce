import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Product, ProductDetails, useCart, useSessionStorage } from "../hooks"

export const ShoppingCartPage:React.FC = ()=>{
    

    const [products, setProducts] = useSessionStorage('cart')
    const [total, setTotal] = useState(0)

    const updateTotal = ()=>{
        let t = 0
        products.forEach((e:ProductDetails)=>{
            t += e.product.price * e.amount
        })
        setTotal(t)
    }

    useEffect(()=>{
        updateTotal()
    },[products])

    return (<>{products ? <div className='card' style={{width: '50vw', margin: 'auto', padding: '20px'}}>
        <div className='cart-header' style={{fontSize: '24px', fontWeight: 'bold'}}>
            Your items:
            <hr></hr>
        </div>
        {products.map((e:ProductDetails)=>{
            return <div className='cart-item' style={{display: 'flex', margin: 'auto', width: '50vw', marginTop: '20px'}}>
                <div className='cart-item-name' style={{float: 'left', marginRight: '25vw', fontSize: '24px'}}>
                {e.product.name}
                </div>
                <div className='cart-item-amount' style={{marginRight: '10px'}}>
                    <input type='number' value={e.amount} style={{width: '100px', fontSize: '24px'}} onChange={t=>{
                            
                            setProducts(products.map((p:ProductDetails)=>{
                                return e.product.id === p.product.id ? {product: p.product, amount: t.target.value} : p
                            }))

                        }} />
                </div>
                <div className='cart-item-price' style={{fontSize: '24px', fontWeight: 'bold'}}>
                    {'X $'+e.product.price}
                </div>
                </div>
        })}
        <div className='cart-footer'>
            <hr></hr>
        <div className='cart-item'>
            <div className='cart-item-name' style={{fontSize: '24px', fontWeight: 'bold'}}>
                Total:
            </div>
            <div className='cart-item-price' style={{fontSize: '24px', fontWeight: 'bold'}}>
                {'$' + total}
            </div>
        </div>
        </div>
    </div>:''}
        <button onClick={()=>{
            setProducts([])
        }}>Clear cart</button>
    </>)
}