import React from 'react'
import { Card, Text } from '../../Themed'
import { Image, ImageProps, View } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { Button } from '../../Button'

type PopularMenuCardProps = {
  item: {
    image: ImageProps | undefined
    name: string
    restaurant: string
    price: number
  }
}

const PopularMenuCard = ({ item }: PopularMenuCardProps) => {
  const router = useRouter()
  const { image, name, price, restaurant } = item

  const onPress = () => {
    router.push('/(stack-screens)/menu/1')
    console.log('pressed')
  }

  return (
    <Button onPress={onPress} className="my-2 w-full">
      <Card className="py-3 px-5 flex-row items-center h-[100px] rounded-2xl">
        <Image source={image!} className="rounded-xl" />

        <View className="ml-3">
          <Text className="text-base font-bold">{name}</Text>
          <Text className="text-base">{restaurant}</Text>
        </View>

        <Text className="text-orange-600 font-bold text-3xl ml-auto">${price}</Text>
      </Card>
    </Button>
  )
}

export default PopularMenuCard
