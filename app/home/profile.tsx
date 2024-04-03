import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import React, { useMemo, useRef } from 'react'
import { Image, useColorScheme } from 'react-native'
import { Card, Text, View } from '../../components/Themed'
import Favorites from '../../components/profile/Favorites'
import { colors, images } from '../../constants'

const Profile = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const bg_color = colorScheme === 'dark' ? '#000' : '#fff'
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => ['66.6%', '66.6%', '90%'], [])
  return (
    <View className="flex-1">
      <Image source={images.photo} className="w-full h-2/6" />

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
          <View className="flex-row items-center">
            <Text className="text-amber-500 bg-amber-500/25 py-3 px-5 rounded-2xl">
              Gold
            </Text>
          </View>

          <View className="mt-5 flex-row items-center justify-between px-2">
            <View>
              <Text className="text-4xl font-extrabold">Olamide Simon</Text>
              <Text className="text-slate-400">simonadepetoye@gmail.com</Text>
            </View>

            <AntDesign name="edit" size={30} color={colors.green} />
          </View>

          <Card className="py-6 mt-5 px-4 rounded-2xl flex-row space-x-2 items-center">
            <MaterialIcons name="local-offer" color="rgb(245 158 11)" size={30} />
            <Text className="text-base font-bold">You have 3 vouchers</Text>
          </Card>

          <View className="mt-5">
            <Favorites />
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  )
}

export default Profile
