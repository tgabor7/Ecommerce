import { useState } from "react"
import { Product } from "../hooks"


interface Props {
    images: string[]
}

let leftButtonStyle:any = {
    position: 'absolute',
    left: 0,
    height: '100%',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(to left, rgba(1,1,1,0), rgba(1,1,1,.5))',
    fontSize: '48px',
    color: 'white'
}
let rightButtonStyle:any = {
    position: 'absolute',
    right: 0,
    height: '100%',
    border: 'none',
    cursor: 'pointer',
    background: 'linear-gradient(to right, rgba(1,1,1,0), rgba(1,1,1,.5))',
    fontSize: '48px',
    color: 'white'


}
let imageStyle:any = {
    width: '100%',
    transition: '.5s'
}

let carouselStyle:any = {
    position: 'relative',
    padding: 0,
    margin: 0
}

export const Carousel:React.FC<Props> = (props:Props)=>{

    const [image, setImage] = useState(props.images[0])
    const [current, setCurrent] = useState(0)

    return (<>{props.images.length > 0 ? <div className='carousel' style={carouselStyle}><button style={leftButtonStyle}
    onClick={()=>{
        if(current <= props.images.length-2) setCurrent(current + 1)
    }}>{'<'}</button><button style={rightButtonStyle}
    onClick={()=>{
        if(current > 0) setCurrent(current - 1)
    }}>{'>'}</button>
        <img src={props.images[current]} style={imageStyle}></img>
        </div>: <div style={{margin: 'auto', width: '100px'}}><i className='fa fa-image'></i></div>}</>)
} 