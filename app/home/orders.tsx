import { router } from 'expo-router'
import React, { useContext } from 'react'
import { FilledButton } from '../../components/Button'
import OrderCard from '../../components/Cards/OrderCard'
import { Card, ScrollView, Text, View } from '../../components/Themed'
import { OrderContext } from '../../context/orderContext'
const Orders = () => {
  const { orders } = useContext(OrderContext)
  const orderTotal = orders.reduce((a, b) => a + b.price * b.noOfOrders, 0)

  return (
    <View className="flex-1 pt-14 px-2">
      <Text className="text-3xl font-bold mb-2">Order details</Text>
      {/* <View className="w-full h-[0.5px] bg-slate-400 rounded-3xl"></View> */}

      <ScrollView showsVerticalScrollIndicator={false} className="px-2">
        {orders.map((order, index) => (
          <OrderCard key={index} item={order} />
        ))}
      </ScrollView>

      <Card className="rounded-2xl space-y-5 bottom-0 left-2 right-2 py-5 px-8 bg-primary">
        <View className="bg-transparent">
          <View className="bg-transparent flex-row justify-between">
            <Text className="font-bold">Sub Total</Text>
            <Text className="font-bold">${orderTotal}</Text>
          </View>

          <View className="bg-transparent flex-row justify-between">
            <Text className="font-bold">Delivery fee</Text>
            <Text className="font-bold">$50</Text>
          </View>

          <View className="bg-transparent flex-row justify-between">
            <Text className="font-bold">Dicount</Text>
            <Text className="font-bold">$10</Text>
          </View>

          <View className="bg-transparent mt-5 flex-row justify-between">
            <Text className="text-xl font-bold">Total</Text>
            <Text className="text-xl font-bold">${orderTotal - 10 + 50}</Text>
          </View>
        </View>

        <FilledButton
          onPress={() => router.push('/order/')}
          className="bg-white"
          textClassName="text-primary text-lg"
        >
          Checkout
        </FilledButton>
      </Card>
    </View>
  )
}

export default Orders
