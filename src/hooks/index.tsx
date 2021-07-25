import { useEffect, useState } from "react"

export interface Product {
    name: string
    price: number
    pic: string
    description: string
}

export const useProducts = (n: number):[boolean, Product[]] => {

    const [products, setProducts] = useState<Array<Product>>([])

    let loading = true

    let create_random_name = ()=>{
        let l = Math.random().toString(35).substring(Math.random() * 8)

        return l
    }

    useEffect(()=>{
        let tmp_products:Array<Product> = []

        for(let i = 0;i<n;i++){
            tmp_products.push({name: create_random_name(), price: Math.floor(Math.random()*100), pic: '123', description: 'qwe'})
        }

        loading = false

        setProducts(products.concat(tmp_products))

    }, [])

    return [loading, products]
}

export const useCart = ()=>{
    const [products, setProducts] = useState<Array<Product>>([])

    return [products, setProducts]
}

export const usePage = ()=>{
    const [page, setPage] = useState(0)
}