import { Product } from "../../hooks"

export enum ActionType {
    ADD = 'add',
    REMOVE = 'remove'
}

interface AddAction {
    type: ActionType.ADD
    payload: Product
}
interface RemoveAction {
    type: ActionType.REMOVE
    payload: Product
}

export type Action = AddAction | RemoveAction

export const cartReducer = (state:Product[] = [], action:Action) =>{
    switch(action.type){
        case ActionType.ADD:
            state.push(action.payload)
            return state
        case ActionType.REMOVE:
            return state.filter((e:Product)=>e.id !== action.payload.id)
        default:
            return state    
    }
}