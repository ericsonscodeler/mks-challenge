'use client'

import useCartStore from '@/utils/cartStore'
import Cart from './components/Cart'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header/index'

import GlobalStyles from './globalStyles'

export default function Home() {
  const { isOpen } = useCartStore()
  return (
    <>
      <GlobalStyles />
      <Header />
      <Content />
      <Cart isOpen={isOpen} />
      <Footer />
    </>
  )
}
