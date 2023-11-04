import { IProduct } from '@/app/types'
import { create } from 'zustand'

export interface CartStore {
  cart: IProduct[]
  isOpen: boolean
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: number) => void
  toggleCart: (open: boolean) => void
  updateProductQuantity: (productId: number, quantity: number) => void
}
const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id,
      )

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex] = {
          ...state.cart[existingProductIndex],
          quantity: (state.cart[existingProductIndex].quantity || 1) + 1,
        }
      } else {
        state.cart = [...state.cart, { ...product, quantity: 1 }]
      }
      return { ...state }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  isOpen: false,
  toggleCart: (open) => set({ isOpen: open }),
  updateProductQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity,
              total: parseFloat(product.price) * quantity,
            }
          : product,
      ),
    })),
}))

export default useCartStore
