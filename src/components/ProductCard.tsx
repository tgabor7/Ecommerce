import { useState } from "react"
import { Product } from "../hooks"

interface Props {
    product: Product
}

export const ProductCard: React.FC<Props> = (e) => {

    const [hover, setHover] = useState(false)

    const cardStyle: any = {
        margin: '100px',
        width: '200px',
        height: '200px'
    }
    const cardHoverStyle: any = {
        margin: '100px',
        width: '200px',
        height: '200px',
        transform: 'scale(1.1)',
        border: '1px solid gray',
        cursor: 'pointer',
        float: 'left'
    }

    return (<>
        <div className='card product-card' style={hover ? cardHoverStyle : cardStyle} onMouseEnter={e => {
            setHover(true)
        }} onMouseLeave={() => { setHover(false) }}>
            <div className='header' style={{ fontSize: '24px', textAlign: 'center', fontWeight: 'bold' }}><div onClick={() => {
                window.location.href = '/item/' + e.product.id
            }} className='item-name'>{e.product.name}</div></div>
            <div className='content' style={{ position: 'relative', display: 'block' }}>{e.product.images.length > 0 ? <img src={e.product.images[0]}></img> : <div className='image-placeholder'
                style={{
                    width: 'max-content',
                    margin: 'auto'
                }}><i className='fa fa-image' style={{ fontSize: '10em' }}></i></div>}</div>
            <div className='footer'>
                <div className='item-price' style={{ fontSize: '24px', float: 'right', fontWeight: 'bold' }}>{e.product.price + '$'}</div></div>
        </div>
    </>)
}