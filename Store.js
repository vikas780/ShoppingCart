const { configureStore } = require('@reduxjs/toolkit')
import CartSlice from './features/cart/CartSlice'

export const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
})
