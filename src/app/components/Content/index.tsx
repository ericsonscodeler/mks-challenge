import React from 'react'
import ProductCard from '../ProductCard'

import { api } from '@/utils/axios'

import { Container } from './styles'
import { useQuery } from '@tanstack/react-query'
import { IProduct, IResponse } from '@/app/types'
import ProductCardSkeleton from '../ProductCard/Loading'

const Content: React.FC = () => {
  const { data, isLoading, isFetching, isError } = useQuery<IResponse>({
    queryFn: async () => {
      const response = await api.get('/products', {
        params: {
          page: 1,
          rows: 8,
          sortBy: 'id',
          orderBy: 'DESC',
        },
      })

      return response.data
    },
    queryKey: ['products'],
  })

  console.log(data?.products)

  return (
    <Container>
      {isError && (
        <div>
          <p>Error</p>
        </div>
      )}
      {(isLoading || isFetching) && <ProductCardSkeleton />}

      {data &&
        data?.products?.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </Container>
  )
}

export default Content
