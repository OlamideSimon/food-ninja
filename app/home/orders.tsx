import React from 'react'
import { ScrollView, Text, View } from '../../components/Themed'
import { FilledButton } from '../../components/Button'
import OrderCard from '../../components/Cards/OrderCard'
import { FlatList } from 'react-native'
import { router } from 'expo-router'

const ordersSample = {
  image:
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  name: 'Noodles',
  price: 10,
  restaurant: 'Rainbow sandwich sugarless',
}

const Orders = () => {
  return (
    <View className="flex-1 pt-20 px-2">
      <Text className="text-3xl font-bold mb-2">Orders</Text>
      <View className="w-full h-[0.5px] bg-slate-400 rounded-3xl"></View>

      <FlatList
        data={new Array(5).fill(ordersSample)}
        renderItem={({ item }) => <OrderCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        className="flex-1 mt-2 mb-20"
      />

      <FilledButton
        onPress={() => router.push('/order/')}
        className="absolute bottom-0 left-5 right-5"
      >
        Checkout
      </FilledButton>
    </View>
  )
}

export default Orders
