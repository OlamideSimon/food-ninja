import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, View as RNView } from 'react-native'
import NearestRestaurantCard from '../../components/Cards/NearestRestaurantCard'
import { Card, Text, TextInput, View } from '../../components/Themed'
import { images } from '../../constants'

const sampleRestaurant = {
  image: images.restaurant,
  name: 'McDonalds',
  distance: '1.2 km',
}

const PopularRestaurants = () => {
  return (
    <View className="py-5 px-2 flex-1">
      <RNView className="flex-row items-center mb-10 gap-x-2">
        <Card className="py-1 px-2 rounded-2xl flex-1 flex-row items-center">
          <Text>
            <Ionicons
              name="search-outline"
              size={30}
              className="absolute right-5 top-4"
            />
          </Text>
          <TextInput className="flex-1 p-3" placeholder="Find your favorite restaurant" />
        </Card>
      </RNView>

      <FlatList
        data={new Array(50).fill(sampleRestaurant)}
        renderItem={({ item }) => (
          <NearestRestaurantCard className="mx-auto my-2" item={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        className=""
      />
    </View>
  )
}

export default PopularRestaurants
