import React from 'react'
import Image from 'next/image'
import { Container } from './styles'

const Error: React.FC = () => {
  return (
    <Container data-testid="container-error">
      <h2>Erro ao carregar produtos</h2>
      <Image alt="Error" src="/error.png" width={800} height={500} />
    </Container>
  )
}

export default Error
