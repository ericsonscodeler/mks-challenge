import useCartStore from '@/utils/cartStore'
import React from 'react'
import { X } from 'lucide-react'

import {
  Card,
  CloseButton,
  Container,
  Content,
  DivQuantity,
  FinalizePurchase,
  HeaderCart,
  Name,
  QuantityDisplay,
  RemoveButton,
  TotalPrice,
} from './styles'
import Image from 'next/image'

const Cart: React.FC = () => {
  const { cart, toggleCart, isOpen, removeFromCart, updateProductQuantity } =
    useCartStore()
  const total = cart.reduce((acc, product) => {
    const productPrice = parseFloat(product.price)
    const productQuantity = product.quantity || 1
    return acc + productPrice * productQuantity
  }, 0)

  console.log(cart)
  return (
    <Container isOpen={isOpen}>
      <HeaderCart>
        <span>Carrinho de Compra</span>
        <CloseButton onClick={() => toggleCart(false)}>
          <X size={18} />
        </CloseButton>
      </HeaderCart>
      <Content>
        {cart.map((product) => (
          <Card key={product.id}>
            <Image width={60} height={60} alt="Product" src={product.photo} />
            <RemoveButton onClick={() => removeFromCart(product.id)}>
              <X size={12} />
            </RemoveButton>
            <Name>
              <p>{product.name}</p>
            </Name>
            <DivQuantity>
              <span>Qtd</span>
              <QuantityDisplay>
                <div
                  onClick={() => {
                    const newQuantity = product.quantity
                      ? product.quantity - 1
                      : 0
                    updateProductQuantity(product.id, newQuantity)
                  }}
                >
                  -
                </div>
                <div>
                  <span>{product.quantity || 1}</span>
                </div>
                <div
                  onClick={() => {
                    const newQuantity = (product.quantity || 1) + 1
                    updateProductQuantity(product.id, newQuantity)
                  }}
                >
                  +
                </div>
              </QuantityDisplay>
            </DivQuantity>
            <div>
              <h4>{`R$${parseFloat(product.price).toFixed(0)}`}</h4>
            </div>
          </Card>
        ))}
      </Content>
      <TotalPrice>
        <div>
          <span>Total:</span>
        </div>
        <div>
          <span>{`R$${total.toFixed(0)}`}</span>
        </div>
      </TotalPrice>
      <FinalizePurchase>
        <span>Finalizar Compra</span>
      </FinalizePurchase>
    </Container>
  )
}

export default Cart
