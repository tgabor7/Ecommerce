import { useProducts } from "../hooks"

export const ProductsPage:React.FC = ()=>{
    
    const [loading, products] = useProducts(10)

    return (<>
        {products.map(e=>{
            return <div>
                {e.name}
            </div>
        })}
    </>)
} 