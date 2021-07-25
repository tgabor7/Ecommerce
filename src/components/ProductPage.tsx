import { Product } from "../hooks"

export const ProductPage:React.FC<Product> = (product:Product)=>{
    return (<>
        {product.name}
    </>)
}