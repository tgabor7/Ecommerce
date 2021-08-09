import { Product } from "../../hooks"
import { Action, ActionType } from "../reducers/cartReducer"
import { Dispatch } from "redux"

export const addToCart = (product:Product)=>{
    return (dispatch:Dispatch)=>{
        dispatch({
            type: ActionType.ADD,
            payload: product
        })
    }
}

export const removeFromCart = (product:Product)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: ActionType.REMOVE,
            payload: product
        })
    }
}