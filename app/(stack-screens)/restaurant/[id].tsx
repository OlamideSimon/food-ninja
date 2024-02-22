import React, { useMemo, useRef } from 'react'
import { Text } from '../../../components/Themed'
import { useLocalSearchParams } from 'expo-router'
import { Image, Pressable, View, useColorScheme } from 'react-native'
import { colors, images } from '../../../constants'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { Ionicons } from '@expo/vector-icons'
import RestaurantMeals from '../../../components/restaurant/RestaurantMeals'
import Testimonials from '../../../components/restaurant/Testimonials'

const Restaurant = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const bg_color = colorScheme === 'dark' ? '#000' : '#fff'
  const { id } = useLocalSearchParams()
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ['50%', '50%', '90%'], [])

  return (
    <View className="flex-1 mt-10">
      <Image source={images.restaurant_photo} className="rounded-b-xl w-full" />

      <BottomSheet
        handleStyle={{ backgroundColor: bg_color }}
        handleIndicatorStyle={{
          backgroundColor: colorScheme === 'dark' ? '#fff' : '#000',
        }}
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView
          style={{ backgroundColor: bg_color, paddingHorizontal: 20 }}
        >
          {/* Actions */}
          <View className="flex-row items-center">
            <Text className="text-primary bg-primary/25 p-3 rounded-xl">Popular</Text>
            <View className="ml-auto flex-row">
              <Pressable>
                <Text className="text-primary m-1 bg-primary/20 p-3 rounded-full">
                  <Ionicons name="location-sharp" size={20} />
                </Text>
              </Pressable>
              <Pressable>
                <Text className="text-red-500 m-1 bg-red-500/20 p-3 rounded-full">
                  <Ionicons name="heart" size={20} />
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Restaurant Name */}
          <Text className="text-center text-3xl font-extrabold my-5">
            McDonalds bar and restaurant
          </Text>

          {/* Details */}
          <View className="flex-row items-center">
            <View className="items-center flex-row mx-2">
              <Ionicons name="location-outline" size={25} color={colors.green} />
              <Text className="text-slate-400">16km</Text>
            </View>
            <View className="items-center flex-row mx-2">
              <Ionicons name="star-half-sharp" size={25} color={colors.green} />
              <Text className="text-slate-400">4.6 Rating</Text>
            </View>
          </View>

          <View>
            <Text className="tracking-wider mt-3 mb-6 leading-6 text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>

          <RestaurantMeals />

          <Testimonials />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  )
}

export default Restaurant
