import { createSlice } from "@reduxjs/toolkit"; 
import {toast } from "react-hot-toast";

const initialState = {
    cartStatus: false,
    items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setOpenCart: (state, action) => {
            state.cartStatus = action.payload.cartStatus;
        },
        setCloseCart: (state, action) => {
            state.cartStatus = action.payload.cartStatus;
        },
        setAddToCart: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id); // if the item is already in the cart, then increase the quantity
            if (itemIndex >= 0) {
                state.items[itemIndex].cartQuantity += 1; 
                toast.success(`Item QTY increased`) // show toast
            } else {
                const temp = {...action.payload, cartQuantity: 1}; // solve duplicate item in cart problem
                state.items.push(temp);
                toast.success(`"${action.payload.title}" added to cart!`)
            } 
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.items));
            toast.success(`"${action.payload.title}" removed from cart!`)
        },
        increaseItemQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.cartQuantity += 1;
                }
                return item;
            }
            );
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        decreaseItemQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    if (item.cartQuantity >= 1) {
                        item.cartQuantity -= 1;
                    } else {
                        state.items = state.items.filter((item) => item.id !== action.payload.id);
                    }
                }
                return item;
            }
            );
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        clearCartItems: (state, action) => {
            state.items = [];
            toast.success(`Cart cleared!`)
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        getTotals: (state, action) => {
            // get total amount and quantity of items in cart using map and reduce
            let { totalAmount, totalQuantity } = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;
                    cartTotal.totalAmount += itemTotal;
                    cartTotal.totalQuantity += cartQuantity;
                    return cartTotal;
                },
                {
                    totalAmount: 0,
                    totalQuantity: 0,
                }
            );
            totalAmount = parseFloat(totalAmount.toFixed(2));
            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity;
                
          },
        },
});

export const { setOpenCart, setCloseCart, setAddToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearCartItems, getTotals  } = cartSlice.actions;
export const selectCartStatus = (state) => state.cart.cartStatus;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity;
export default cartSlice.reducer;