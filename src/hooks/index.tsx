import { useEffect, useState } from "react"
import Products from '../Products.json'

export interface Product {
    name: string
    price: number
    images: string[]
    description: string
    id: string
}

export const useProducts = (): [boolean, Product[], any] => {

    const [products, setProducts] = useState<Array<Product>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const url = 'http://localhost:4000/products'


    return [loading, products, () => {
        setLoading(true)

        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }).then((response: any) => {
            response.json().then((data:Product[])=>{
                setProducts(data)
            })
            setLoading(false)
        })
    }]
}
export const getProducts = (n: number, m: number) => {

    return Products.slice(n, m)
}
export const useCart = () => {
    const [products, setProducts] = useState<any>(['asd'])

    return [products, setProducts]
}
export const getProduct = (id: string | undefined) => {
    if (id === undefined) return undefined
    return Products.filter(e => e.id === id)[0]

}
export const useProduct = (id:string):[boolean, Product|undefined]=> {
    const [product, setProduct] = useState<Product>()
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const url = 'http://localhost:4000/products?id=' + id
        fetch(url).then(response=>{
            response.json().then(data=>{
                setProduct(data)
                setLoading(false)
            })
        })
    })

    return [loading, product]
}
export interface ProductDetails {
    product: Product
    amount: number
}
export const useSessionStorage = (key: string) => {
    let v = sessionStorage.getItem(key)
    const [value, setValue] = useState(v ? JSON.parse(v) : [])
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
export const post = (data: any) => {
    const url = 'http://localhost:4000/products'

    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(r => {
        alert(r)
    })
}