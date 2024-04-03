import { createContext } from 'react'

export type OrderType = {
  image: string
  name: string
  price: number
  restaurant: string
  noOfOrders: number
}

type OrderContextType = {
  orders: OrderType[]
  setOrders: (order: OrderType[]) => void
}

export const OrderContext = createContext<OrderContextType>({
  orders: [],
  setOrders: () => {},
})
