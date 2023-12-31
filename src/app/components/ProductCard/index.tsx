import React from 'react'
import Image from 'next/image'
import {
  Container,
  Description,
  DivImg,
  DivItem,
  Name,
  Price,
  Purchase,
} from './styles'
import { ShoppingBag } from 'lucide-react'
import { IProduct } from '@/app/types'
import useCartStore from '@/utils/cartStore'

interface ProductCardProps {
  product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore()
  const handleAddProduct = (product: IProduct) => {
    addToCart(product)
  }
  return (
    <Container data-testid={product.id}>
      <DivImg>
        <Image
          src={product.photo}
          alt={product.name}
          width={150}
          height={150}
        />
      </DivImg>
      <DivItem>
        <Name data-testid={product.name}>
          <p>{product.name}</p>
        </Name>
        <Price>
          <p>{`R$${parseFloat(product.price)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}</p>
        </Price>
      </DivItem>
      <Description>
        <p>{product.description}</p>
      </Description>
      <Purchase onClick={() => handleAddProduct(product)}>
        <ShoppingBag />
        <p data-testid={`purchase-${product.id}`}>Comprar</p>
      </Purchase>
    </Container>
  )
}

export default ProductCard
