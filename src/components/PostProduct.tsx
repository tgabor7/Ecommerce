import { JSXElement } from "@babel/types"
import React, { useEffect, useRef, useState } from "react"
import { post } from "../hooks"

import './PostProduct.css'

export const PostProduct: React.FC = () => {
    
    const [pictures, setPictures] = useState<any>([])
    const [error, setError] = useState('')
    const [priceError, setPriceError] = useState('')
    const [link, setLink] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState<number>(0)
    const [links, setLinks] = useState<any>([])

    const images = useRef<HTMLImageElement[]>([])

    const validateName = (name:String):boolean=>{
        return name === ''
    }
    const validatePrice = (price:number)=>{
        return true
    }
    return (<>
        <div className='card'>
            <div className='is-size-1 card-title p-2 has-text-centered'>
                Post product
            </div>
            <div className='card-content'>
                <input className='input mb-2' type='text' onChange={e=>{setName(e.target.value)}} value={name} placeholder='Name'></input>
                <div className='error-message'>
                    {error}
                </div>
                <hr></hr>
                <div className='p-1'>
                <input className='input' onChange={e=>{setLink(e.target.value)}} value={link} type='text' placeholder='image link (url i dont have database :())'></input>
                <input className='button' type='button' value='Upload image' onClick={()=>{
                    let image = <img src={link}></img>
                    setLinks(links.concat([link]))
                    setLink('')
                    setPictures(pictures.concat([image]))
                }}></input>
                </div>
                <div className='picture-container columns is-multiline is-mobile'>
                {pictures}
                </div>
                    <textarea className='textarea' placeholder='Description' onChange={e=>{setDescription(e.target.value)}} value={description}></textarea>
                </div>
                <div className='price-input'>
                    <p>$</p>
                <input className='input' onChange={e=>{setPrice(parseFloat(e.target.value))}} value={price} type='number'></input>
                </div>
                <div className='card-footer'>
                    <div className='container'>
                        <button className='button mt-0 is-pulled-right' onClick={()=>{
                            post({'name':name, 'description': description, 'price':price, 'images': links})
                            validateName(name)
                            validatePrice(price)
                        }}>Post</button>
                    </div>
                </div>
            </div>
    </>)
}