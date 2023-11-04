export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  quantity?: number
}
export interface IResponse {
  count: number
  products: IProducts[]
}
