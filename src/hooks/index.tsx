import { useEffect, useState } from "react"

export interface Product {
    name: string
    price: number
    pic: string
}

export const useProducts = (n: number)=>{

    const [products, setProducts] = useState<Array<Product>>([])

    
    return [products]
}

export const useCart = ()=>{
    const [products, setProducts] = useState<Array<Product>>([])

    return [products, setProducts]
}

export const usePage = ()=>{
    const [page, setPage] = useState(0)
}