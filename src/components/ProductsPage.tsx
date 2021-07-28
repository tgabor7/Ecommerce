import { useState } from "react"
import { getProducts, useProduct, useProducts } from "../hooks"
import './ProductsPage.css'

export const ProductsPage:React.FC = ()=>{
    
    const [pages, setPages] = useState<number>(10)
    const [products, setProducts] = useState(getProducts(0,10))    
    const [page, setPage] = useState(1)

    const createPageButtons = (n:number)=>{
        let buttons = []

        for(let i = 0;i<n;i++){
            buttons.push(<div className={'page-button button ' + (page === (i+1) ? 'active' : 'not-active')} onClick={()=>{
                setProducts(getProducts(i*10, (i+1)*10))
                setPage(i+1)
                window.scrollTo(0,0)
            }}>{i+1}</div>)
        }
        return buttons
    }

    return (<>
    <div className='items'>
    <h1 className='is-size-3 has-text-weight-bold'>All items</h1>

        {'Page: ' + page}
        {products.map(e=>{
            return <div className='card product-card'>
                <div className='card-header'><div onClick={()=>{
                    window.location.href = '/item/' + e.id
                }} className='item-name'>{e.name}</div></div>
                <div className='item-price'>{e.price + '$'}</div>
            </div>
        })}
        <div className='page-buttons'>
            <div>{createPageButtons(10)}
            </div>
        </div>
    </div>
    </>)
} 