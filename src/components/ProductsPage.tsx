import { useProducts } from "../hooks"
import './ProductsPage.css'

export const ProductsPage:React.FC = ()=>{
    
    const [loading, products] = useProducts(10)

    return (<><div className='items'>
        {products.map(e=>{
            return <div className='card'>
                <div className='card-header'><div className='item-name'>{e.name}</div></div>
                <div className='item-price'>{e.price + '$'}</div>
            </div>
        })}
    </div></>)
} 