import { useContext, useEffect } from "react"
import { useCart } from "../hooks"

export const ShoppingCartPage:React.FC = ()=>{
    
    const [products, setProducts] = useCart()

    useEffect(()=>{
        console.log(products)
    },[])

    return (<>
    asd
        {products.map((e:any)=>{
            return <div>{e}</div>
        })}
    </>)
}