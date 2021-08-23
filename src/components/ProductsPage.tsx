import { findByLabelText } from "@testing-library/react"
import { useEffect, useState } from "react"
import { getProducts, Product, useProduct, useProducts } from "../hooks"
import { ProductCard } from "./ProductCard"

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

    const itemsStyle:any = {
        width: '100vw',
        margin: 'auto'
    }

    const buttonsStyle:any = {
        position: 'relative',
        display: 'block',
        margin: 'auto',
        width: 'max-content'
    }

    const cardStyle:any = {
        margin: '100px',
        width: '200px',
        height: '200px'
    } 

    return (<>
    <div className='items' style={{padding: '20px', margin: 'auto', width: 'max-content'}}> 
    <h1 className='is-size-3 has-text-weight-bold'>All items</h1>
    {'Page: ' + page}
    <div className='columns is-multiline is-mobile' style={itemsStyle}>
        {products.map(e=>{
            return <ProductCard product={e}></ProductCard>
        })}
        
        </div>
        <div className='page-buttons' style={buttonsStyle}>
            <div>{createPageButtons(10)}
            </div>
        </div>
    </div>
    </>)
} 