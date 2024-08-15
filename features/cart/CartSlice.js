import axios from 'axios'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const FetchProducts = createAsyncThunk(
  'products/allproducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios('https://dummyjson.com/products')
      console.log(response.data.products)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const initialState = {
  CartItems: [],
  ProductQuantity: 1,
  CartTotal: 0,
  OrderTotal: 0,
  NumItemsCart: 0,
}

// const GetCartFromLocalStorage = () => {
//   return JSON.parse(localStorage.getItem('cart')) || initialState
// }

const CartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(initialState))
      return defaultState
    },
    addToCart: (state, action) => {
      const { product } = action.payload
      const isItemPresent = state.CartItems.find((i) => i.id === product.id)
      if (!isItemPresent) {
        state.CartItems.push(product)
      }
    },
    increase: (state, action) => {
      const incId = action.payload
      const singleItem = state.CartItems.find((item) => item.id === incId)
      singleItem.ProductQuantity = singleItem.ProductQuantity + 1
    },
    decrease: (state, action) => {
      const decId = action.payload

      const singleItem = state.cartItems.find((item) => item.id === decId)
      singleItem.ProductQuantity = singleItem.ProductQuantity - 1
    },
  },
})

export const { clearCart, increase, decrease } = CartSlice.actions
export default CartSlice.reducer
