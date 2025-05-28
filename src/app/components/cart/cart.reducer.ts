import { createReducer, on } from "@ngrx/store";
import { removeFromCart, reduceFromCart, addToCart } from "./cart.action";
import { CartItem } from "../../model/CartItem";
import { state } from "@angular/animations";

export const initialState : CartItem[]=[];

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state,{item})=>{
        const existing = state.find(i=> i.id==item.id);
        if(existing){
            return state.map(i=>
               i.id==item.id?{...i, quantity:i.quantity+1}:i
            );
        }else{
            return [...state, {...item, quantity:1}]
        }        
    }),

    on(reduceFromCart, (state, {itemId})=>{
        const existing = state.find(i=> i.id==itemId);
        if(existing?.quantity == 1){
            return state.filter(i=>i.id!=itemId);
        }else{
            return state.map(i => 
                i.id==itemId?{...i, i:i.quantity-1}:i
            );
        }
    }),

    on(removeFromCart, (state,{item})=>{
        return state.filter(i=> i.id!=item.id);
    }),



);

    




    
