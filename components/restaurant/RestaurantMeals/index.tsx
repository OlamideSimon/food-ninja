import React from 'react'
import { Text } from '../../Themed'
import { Link } from 'expo-router'
import { FlatList, View } from 'react-native'
import RestaurantMenuCard from '../../Cards/RestaurantMenuCard'
import { images } from '../../../constants'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

const sampleMeals = {
  image: images.restaurant,
  name: 'McDonalds',
  price: 60,
}

const RestaurantMeals = () => {
  return (
    <View className="mb-8">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-bold">Popular Menu</Text>

        <Link href={'/'}>
          <Text className="text-orange-600">View More</Text>
        </Link>
      </View>

      <BottomSheetFlatList
        data={new Array(10).fill(sampleMeals)}
        renderItem={({ item }) => <RestaurantMenuCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    </View>
  )
}

export default RestaurantMeals
