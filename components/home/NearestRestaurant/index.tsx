import { Link } from 'expo-router'
import React from 'react'
import { FlatList, View } from 'react-native'
import { images } from '../../../constants'
import NearestRestaurantCard from '../../Cards/NearestRestaurantCard'
import { Text } from '../../Themed'

const sampleRestaurant = {
  image: images.restaurant,
  name: 'McDonalds',
  distance: '1.2 km',
}

const NearestRestaurant = () => {
  return (
    <View className="mb-8 px-4 gap-y-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-bold">Nearest Restaurant</Text>

        <Link href={'/(stack-screens)/popular-restaurants'}>
          <Text className="text-orange-600">View More</Text>
        </Link>
      </View>

      <FlatList
        data={new Array(10).fill(sampleRestaurant)}
        renderItem={({ item }) => <NearestRestaurantCard className="mx-2" item={item} />}
        keyExtractor={(item, index) => index.toString()}
        className="gap-x-5"
        horizontal
      />
    </View>
  )
}

export default NearestRestaurant
