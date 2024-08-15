import axios from 'axios'
import { toast } from 'react-toastify'

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

const defaultState = {
  CartItems: [],
  ProductQuantity: 1,
  CartTotal: 0,
  OrderTotal: 0,
  NumItemsCart: 0,
}

const getCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    if (storedCart && storedCart.CartItems) {
      return storedCart
    }
  }
  return defaultState
}

const CartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),

  reducers: {
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState
    },
    addToCart: (state, action) => {
      const { product } = action.payload

      if (!product || !product.id) {
        console.error('Product or product.id is undefined')
        return
      }
      const isItemPresent = state.CartItems.find((i) => i.id === product.id)
      if (!isItemPresent) {
        state.NumItemsCart += 1
        state.CartItems.push(product)
        localStorage.setItem('cart', JSON.stringify(state))
        toast.success(`${product.title} added to cart`)
      } else {
        toast.error('Item already added to cart')
        return
      }
    },
    increase: (state, action) => {
      const incId = action.payload
      const item = state.CartItems.find((item) => item.id === incId)

      if (item) {
        item.ProductQuantity += 1
        toast.success(`${item.title} quantity increased`)
        localStorage.setItem('cart', JSON.stringify(state))
      } else {
        toast.error('Item not found in cart')
      }
    },

    decrease: (state, action) => {
      const decId = action.payload
      const singleItem = state.CartItems.find((item) => item.id === decId)

      if (singleItem) {
        if (singleItem.ProductQuantity > 1) {
          singleItem.ProductQuantity -= 1
          toast.success('Item quantity decreased')
          localStorage.setItem('cart', JSON.stringify(state))
        } else {
          CartSlice.caseReducers.removeOnDecrease(state, { payload: decId })
          toast.error(`${singleItem.title} removed`)
        }
      } else {
        toast.error('Item not found in cart')
      }
    },
    removeProduct: (state, action) => {
      const removeId = action.payload
      state.CartItems = state.CartItems.filter((item) => item.id !== removeId)
      if (state.NumItemsCart > 1) {
        state.NumItemsCart -= 1
      } else {
        state.NumItemsCart = 0
      }

      toast.error('Product removed from cart')

      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeOnDecrease: (state, action) => {
      const removeId = action.payload
      state.CartItems = state.CartItems.filter((item) => item.id !== removeId)
      state.NumItemsCart -= 1

      localStorage.setItem('cart', JSON.stringify(state))
    },
    productDetails: (state, action) => {
      const prodId = action.payload
    },
  },
})

export const {
  clearCart,
  increase,
  decrease,
  addToCart,
  removeProduct,
  removeOnDecrease,
} = CartSlice.actions
export default CartSlice.reducer
