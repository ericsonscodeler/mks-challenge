import React from 'react'
import { Container } from './styles'

import { api } from '@/utils/axios'

import { useQuery } from '@tanstack/react-query'
import { IProduct, IResponse } from '@/app/types'
import ProductCard from '../ProductCard'
import ProductCardSkeleton from '../ProductCard/Loading'
import Error from '../Error'

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

  return (
    <Container>
      {(isLoading || isFetching) && <ProductCardSkeleton />}
      {isError && <Error />}
      {data &&
        data?.products?.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </Container>
  )
}

export default Content
