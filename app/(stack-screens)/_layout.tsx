import { Stack, router } from 'expo-router'
import React from 'react'
import { BackButton } from '../../components/Button'

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="popular-restaurants"
        options={{
          headerTitle: 'Popular Restaurants',
          headerLeft: () => <BackButton previousStep={() => router.back()} />,
        }}
      />

      <Stack.Screen
        name="restaurant/[id]"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="menu/[id]"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="order/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default StackLayout
