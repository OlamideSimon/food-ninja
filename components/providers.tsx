import React, { useState } from 'react'
import { OrderContext, OrderType } from '../context/orderContext'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'

const Providers = ({ children }: any) => {
  const { colorScheme } = useColorScheme()
  const [orders, setOrders] = useState<OrderType[]>([])

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </OrderContext.Provider>
  )
}

export default Providers
