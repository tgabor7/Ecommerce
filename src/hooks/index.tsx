import { useEffect, useState } from "react"
import Products from '../Products.json'

export interface Product {
    id: string
    name: string
    price: number
    pic: string
    description: string
}

export const useProducts = (n: number, m: number):[boolean, Product[]] => {

    const [products, setProducts] = useState<Array<Product>>([])

    let loading = true

    useEffect(()=>{
        setProducts(Products.slice(n,m))
    }, [])

    console.log(products)
    return [loading, products]
}
export const getProducts = (n: number, m: number) =>{
    return Products.slice(n,m)
}
export const useCart = ()=>{
    const [products, setProducts] = useState<any>(['asd'])

    return [products, setProducts]
}
export const getProduct = (id: string | undefined) =>{
    if(id === undefined) return undefined
    return Products.filter(e=>e.id===id)[0]

}
export const useProduct = ()=>{
    const [product, setProduct] = useState<Product>()

    return [product, setProduct]
}