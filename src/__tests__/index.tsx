import { render, waitFor, fireEvent } from '@testing-library/react'
import Home from '../app/page'
import Provider from '@/utils/providers'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { products } from './mock'

const mock = new MockAdapter(axios)

beforeEach(() => {
  mock.reset()
})

describe('Testes', () => {
  it('Should render page Home', () => {
    mock.onGet('/products').reply(200, products)
    render(
      <Provider>
        <Home />
      </Provider>,
    )
  })
  it('Should show products', async () => {
    mock.onGet('/products').reply(200, products)
    const { getByTestId } = render(
      <Provider>
        <Home />
      </Provider>,
    )

    await waitFor(() => {
      expect(getByTestId('1'))
      expect(getByTestId('2'))
      expect(getByTestId('3'))
    })
    await waitFor(() => {
      expect(getByTestId('Headset Cloud Stinger'))
      expect(getByTestId('Headset Cloud Revolver'))
      expect(getByTestId('iPad'))
    })
  })

  it('Should add products to cart', async () => {
    mock.onGet('/products').reply(200, products)
    const { getByTestId, getByText } = render(
      <Provider>
        <Home />
      </Provider>,
    )

    await waitFor(() => {
      fireEvent.click(getByTestId('purchase-1'))
    })
  })

  it('Should add one products to cart', async () => {
    mock.onGet('/products').reply(200, products)
    const { getByTestId } = render(
      <Provider>
        <Home />
      </Provider>,
    )

    await waitFor(() => {
      fireEvent.click(getByTestId('purchase-1'))
    })

    await waitFor(() => fireEvent.click(getByTestId('cart')))

    await waitFor(() => {
      expect(getByTestId('sidebar-cart'))
      expect(getByTestId('cart-product-1'))
    })
  })

  it('Should add two products to cart', async () => {
    mock.onGet('/products').reply(200, products)
    const { getByTestId } = render(
      <Provider>
        <Home />
      </Provider>,
    )

    await waitFor(() => {
      fireEvent.click(getByTestId('purchase-1'))
      fireEvent.click(getByTestId('purchase-2'))
    })

    await waitFor(() => fireEvent.click(getByTestId('cart')))

    await waitFor(() => {
      expect(getByTestId('sidebar-cart'))
      expect(getByTestId('cart-product-1'))
      expect(getByTestId('cart-product-2'))
    })
  })

  it('Should must add quantity of the product to the cart', async () => {
    mock.onGet('/products').reply(200, products)
    const { getByTestId } = render(
      <Provider>
        <Home />
      </Provider>,
    )

    await waitFor(() => {
      fireEvent.click(getByTestId('purchase-1'))
    })

    await waitFor(() => fireEvent.click(getByTestId('cart')))

    await waitFor(() => {
      expect(getByTestId('sidebar-cart'))
      expect(getByTestId('cart-product-1'))
    })

    await waitFor(() => fireEvent.click(getByTestId('add-quantity-1')))

    await waitFor(() => getByTestId('R$1200'))
  })

  it('Should must remove quantity of the product to the cart', async () => {
    mock.onGet('/products').reply(200, products)
    const { getByTestId } = render(
      <Provider>
        <Home />
      </Provider>,
    )

    await waitFor(() => {
      fireEvent.click(getByTestId('purchase-1'))
    })

    await waitFor(() => fireEvent.click(getByTestId('cart')))

    await waitFor(() => {
      expect(getByTestId('sidebar-cart'))
      expect(getByTestId('cart-product-1'))
    })

    await waitFor(() => fireEvent.click(getByTestId('add-quantity-1')))
    await waitFor(() => fireEvent.click(getByTestId('add-quantity-1')))

    await waitFor(() => fireEvent.click(getByTestId('remove-quantity-1')), {
      timeout: 1000,
    })

    await waitFor(() => getByTestId('R$1200'), {
      timeout: 1000,
    })
  })
})
