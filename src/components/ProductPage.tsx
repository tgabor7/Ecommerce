import { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { bindActionCreators } from "redux"
import { getProduct, useCart, useProduct, useSessionStorage } from "../hooks"
import { acionCreators } from "../state"
import { Carousel } from "./Carousel"
import { Dialog } from "./Dialog"

export const ProductPage: React.FC = () => {

    const { id } = useParams<{ id?: string }>()


    const [show, setShow] = useState<boolean>(false)
    const [loading, product] = useProduct(id ? id : '')

    const cardStyle: any = {
        'width': '50vw',
        'margin': 'auto',
        'padding': '20px'
    }

    const [amount, setAmount] = useState<number>(1)


    const [value, setValue] = useSessionStorage('cart')

    return (<>{product ? <div><div className='card' style={cardStyle}>
        <div className='card-header' style={{ fontSize: '32px', fontWeight: 'bold' }}>
            <div className='card-title' style={{ textAlign: 'center', margin: 'auto', padding: '10px' }}>
                {product.name}
            </div>
        </div>
        <div className='card-content'>
            <Carousel images={product.images}></Carousel>
            {product.description}
        </div>
        <div className='card-footer'>

            <div className='container'>
                <div className='price-container'><div>Amount:</div><input className='number-input' value={amount} onChange={e => { setAmount(parseInt(e.target.value)) }} type='number'></input></div>
                <button className='button is-primary is-pulled-right' onClick={() => {
                    if (value.filter((e: any) => {
                        return e.product.id === product.id
                    }).length > 0) {
                        setShow(true)
                        return
                    }
                    setValue(value ? value.concat([{ product: product, amount: amount }]) : [{ product: product, amount: amount }])
                }}>Add to cart</button></div>
            <p>{(product.price * amount) + '$'}</p>


        </div>
    </div>
    </div> : ''}
        <Dialog show={show} title={'Info'} content={'Item already in cart'} setShow={setShow} />

    </>)
}