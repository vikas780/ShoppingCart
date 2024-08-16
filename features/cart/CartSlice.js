import axios from 'axios'
import { toast } from 'react-toastify'

const { createSlice } = require('@reduxjs/toolkit')

const defaultState = {
  CartItems: [],
  ProductQuantity: 1,
  CartTotal: 0,
  OrderTotal: 0,
  NumItemsCart: 0,
  isLoaded: false,
}

// const getCartFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     const storedCart = JSON.parse(localStorage.getItem('cart'))
//     if (storedCart && storedCart.CartItems) {
//       return storedCart
//     }
//   }
//   return defaultState
// }

const CartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,

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

        const initialQuantity = product.price < 2 ? 5 : 1
        const initialPrice = product.price * initialQuantity

        state.CartItems.push({
          ...product,
          ProductQuantity: initialQuantity,
          originalPrice: product.price,
          price: initialPrice,
        })

        toast.success(`${product.title} added to cart`)
      } else {
        toast.error('Item already added to cart')
        return
      }
      // }

      CartSlice.caseReducers.totalPrice(state) // Calculate the total price
      localStorage.setItem('cart', JSON.stringify(state))
    },

    increase: (state, action) => {
      const incId = action.payload
      const item = state.CartItems.find((item) => item.id === incId)

      if (item) {
        item.ProductQuantity += 1
        item.price = item.originalPrice * item.ProductQuantity
        toast.success(`${item.title} quantity increased`)
        CartSlice.caseReducers.totalPrice(state)
        localStorage.setItem('cart', JSON.stringify(state))
      } else {
        toast.error('Item not found in cart')
      }
    },

    decrease: (state, action) => {
      const decId = action.payload
      const singleItem = state.CartItems.find((item) => item.id === decId)

      if (singleItem) {
        if (singleItem.ProductQuantity === 5) {
          CartSlice.caseReducers.removeOnDecrease(state, { payload: decId })
          toast.error(` ${singleItem.title} Quantity can't be less than 5`)
        } else if (singleItem.ProductQuantity > 1) {
          singleItem.ProductQuantity -= 1
          singleItem.price -= singleItem.originalPrice
          toast.success(`${singleItem.title} quantity decreased`)
          CartSlice.caseReducers.totalPrice(state)
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

      // To display product title at remove time 1st we need to find the product then filter the product from other products

      const productToRemove = state.CartItems.find(
        (item) => item.id === removeId
      )
      if (productToRemove) {
        state.CartItems = state.CartItems.filter((item) => item.id !== removeId)
        if (state.NumItemsCart > 1) {
          state.NumItemsCart -= 1
        } else {
          state.NumItemsCart = 0
        }

        toast.error(`${productToRemove.title} removed from cart`)
        CartSlice.caseReducers.totalPrice(state)

        localStorage.setItem('cart', JSON.stringify(state))
      } else {
        toast.error('Product not found in cart')
      }
    },
    removeOnDecrease: (state, action) => {
      const removeId = action.payload
      state.CartItems = state.CartItems.filter((item) => item.id !== removeId)
      state.NumItemsCart -= 1

      localStorage.setItem('cart', JSON.stringify(state))
    },

    totalPrice: (state) => {
      state.CartTotal = 0
      state.CartItems.forEach((item) => {
        state.CartTotal += item.price
      })
      localStorage.setItem('cart', JSON.stringify(state))
    },
    loadCartFromLocalStorage: (state) => {
      if (typeof window !== 'undefined') {
        const storedCart = JSON.parse(localStorage.getItem('cart'))
        if (storedCart && storedCart.CartItems) {
          return { ...storedCart, isLoaded: true }
        }
      }
      return { ...state, isLoaded: true }
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
  loadCartFromLocalStorage,
} = CartSlice.actions
export default CartSlice.reducer
