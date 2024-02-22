import React from 'react'
import { Image, View } from 'react-native'
import { images } from '../../../constants'
import { Text } from '../../Themed'

const ResetSuccess = () => {
  return (
    <>
      <View className="items-center flex-1 justify-center h-full gap-y-5 mt-[25%]">
        <Image source={images.illustration} />
        <Text className="text-primary text-4xl font-bold">Congrats!</Text>
        <Text className="text-2xl font-medium">Your Profile is ready to use</Text>
      </View>
    </>
  )
}

export default ResetSuccess
