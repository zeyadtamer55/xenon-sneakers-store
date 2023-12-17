import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const CartSlice = createSlice({
    
    name : "cart",
    
    initialState,
    
    reducers : {
        
        addProduct : ( state , action ) => {
            state = [ ...state , action.payload ]
        },
        
        removeProduct : ( state , action ) => {
            state = state.filter( product => product !== action.payload )
        },

        incProductQty : ( state , action ) => {
            state = state.map(product => {
                if ( product.id === action.payload.id )
                return { ...product , quantity: action.payload.quantity + 1 }
                return product
            })
        },
        
        decProductQty : ( state , action ) => {
            state = state.map(product => {
                if ( product.id === action.payload.id ){
                    if ( action.payload.quantity !== 1 )
                    return { ...product , quantity: action.payload.quantity - 1 }
                }
                return product
            })
        }
    }
    
})


export const { addProduct , removeProduct , incProductQty , decProductQty } = CartSlice.actions
export default CartSlice.reducer;
