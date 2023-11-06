'use client'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Company, Container, Cart } from './styles'
import useCartStore from '@/utils/cartStore'

const Header: React.FC = () => {
  const { toggleCart, isOpen } = useCartStore()
  return (
    <Container data-testid="header">
      <Company>
        <span>MKS</span>
        <p>Sistemas</p>
      </Company>
      <Cart data-testid="cart" onClick={() => toggleCart(!isOpen)}>
        <ShoppingCart />
        <p>0</p>
      </Cart>
    </Container>
  )
}

export default Header
