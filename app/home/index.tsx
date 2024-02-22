import React from 'react'
import { Card, ScrollView, Text, TextInput, View } from '../../components/Themed'
import { Image, Pressable, View as RNView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Button } from '../../components/Button'
import { colors, images } from '../../constants'
import NearestRestaurant from '../../components/home/NearestRestaurant'
import PopularMenu from '../../components/home/PopularMenu'

const HomePage = () => {
  return (
    <ScrollView className="px-2 pt-20">
      <RNView className="flex-row items-center w-full flex-1 mb-8">
        <Text className="text-4xl font-bold flex-1">Find your favorite Food</Text>
        <Pressable>
          <Card className="justify-center items-center p-3 rounded-3xl">
            <Ionicons name="notifications-outline" color={colors.green} size={30} />
          </Card>
        </Pressable>
      </RNView>

      <RNView className="flex-1 flex-row items-center mb-8 gap-x-2">
        <Card className="py-1 px-2 rounded-2xl flex-1 flex-row items-center">
          <Text>
            <Ionicons
              name="search-outline"
              size={30}
              className="absolute right-5 top-4"
            />
          </Text>
          <TextInput className="flex-1 p-3" placeholder="what do you want to order?" />
        </Card>

        <Pressable>
          <Card className="justify-center items-center p-3 rounded-2xl">
            <Text>
              <Ionicons name="filter-outline" size={30} />
            </Text>
          </Card>
        </Pressable>
      </RNView>

      <RNView className="justify-center items-center mb-8">
        <Image source={images.promo} />
      </RNView>

      <NearestRestaurant />

      <PopularMenu />
    </ScrollView>
  )
}

export default HomePage
