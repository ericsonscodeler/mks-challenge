import React from 'react'

import {
  Container,
  Description,
  DivImg,
  DivItem,
  Loading,
  Name,
} from './styles'

const LOADING_QUANTITY = 8

const ProductCardSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: LOADING_QUANTITY }, (_, index) => (
        <Container key={index}>
          <DivImg>
            <Loading height="150" width="150" />
          </DivImg>
          <DivItem>
            <Name>
              <Loading height="40" width="130" />
            </Name>
            <Loading height="40" width="60" />
          </DivItem>
          <Description>
            <Loading height="100" width="260" />
          </Description>
        </Container>
      ))}
    </>
  )
}

export default ProductCardSkeleton
