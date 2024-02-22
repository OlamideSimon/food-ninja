import React from 'react'
import { Image, View } from 'react-native'
import { Text } from '../Themed'
import { images } from '../../constants'
import { useRouter } from 'expo-router'
import { Button } from '../Button'
import AppContainer from '../AppContainer'

type Props = {
  message: string
  buttonText: string
  link: string
}

const SuccessScreen = ({ buttonText, message, link }: Props) => {
  const router = useRouter()

  const onPress = () => {
    router.replace(link as any)
  }

  return (
    <>
      <View className="items-center justify-center h-[95%] gap-y-5">
        <Image source={images.illustration} />
        <Text className="text-primary text-4xl font-bold">Congrats!</Text>
        <Text className="text-2xl font-medium">{message}</Text>
      </View>

      <View className="absolute bottom-6 px-[20%] justify-center w-full">
        <Button
          className="bg-primary py-4 justify-center items-center rounded-xl my-5"
          onPress={onPress}
        >
          <Text className="text-white text-2xl font-semibold">{buttonText}</Text>
        </Button>
      </View>
    </>
  )
}

export default SuccessScreen
