import { Link } from 'expo-router'
import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '../../Themed'
import { images } from '../../../constants'
import PopularMenuCard from '../../Cards/PopularMenuCard'

const sampleMenu = {
  image: images.menu,
  price: 10,
  name: 'Pizza',
  restaurant: 'McDonalds',
}

const PopularMenu = () => {
  return (
    <View className="mb-20 px-4 gap-y-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-bold">Popular Menu</Text>

        <Link href={'/'}>
          <Text className="text-orange-600">View More</Text>
        </Link>
      </View>

      {new Array(10).fill(sampleMenu).map((item, index) => (
        <PopularMenuCard key={index} item={item} />
      ))}
    </View>
  )
}

export default PopularMenu
