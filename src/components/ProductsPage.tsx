import { useEffect, useState } from "react"
import { getProducts, Product, useProduct, useProducts } from "../hooks"
import './ProductsPage.css'

export const ProductsPage:React.FC = ()=>{
    
    const [pages, setPages] = useState<number>(10)
    const [page, setPage] = useState(1)
    const [loading, products, getProducts] = useProducts()

    useEffect(()=>{
        getProducts()
    }, [])

    const createPageButtons = (n:number)=>{
        let buttons = []

        for(let i = 0;i<n;i++){
            buttons.push(<div className={'page-button button ' + (page === (i+1) ? 'active' : 'not-active')} onClick={()=>{
                setPage(i+1)
                getProducts()
                window.scrollTo(0,0)
            }}>{i+1}</div>)
        }
        return buttons
    }

    return (<>
    <div className='items'>
    <h1 className='is-size-3 has-text-weight-bold'>All items</h1>
    {'Page: ' + page}
    <div className='columns is-multiline is-mobile'>
        {products.map(e=>{
            return <div className='card product-card'>
                <div className='header'><div onClick={()=>{
                    window.location.href = '/item/' + e.id
                }} className='item-name'>{e.name}</div></div>
                <div className='content'>{e.images.length > 0 ? <img src={e.images[0]}></img>:<div className='image-placeholder'><i className='fa fa-image'></i></div>}</div>
                <div className='footer'>
                <div className='item-price'>{e.price + '$'}</div></div>
            </div>
        })}
        
        </div>
        <div className='page-buttons'>
            <div>{createPageButtons(10)}
            </div>
        </div>
    </div>
    </>)
} 