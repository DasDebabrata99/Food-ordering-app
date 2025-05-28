import { createAction, props } from "@ngrx/store";
import { CartItem } from "../../model/CartItem";

export const addToCart = createAction(
    '[Cart] Add Item',
    props<{item:CartItem}>()
);

export const reduceFromCart = createAction(
    '[Cart] Reduce Item',
    props<{itemId: string}>()
)

export const removeFromCart = createAction(
    '[Cart] Remove item',
    props<{item: CartItem}>()
);