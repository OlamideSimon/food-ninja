import React from 'react'
import { Card, Text } from '../../Themed'
import { Image, ImageProps, View } from 'react-native'
import { Button, FilledButton } from '../../Button'

type Props = {
  item: {
    image: ImageProps | string
    name: string
    price: number
    restaurant: string
  }
}

const OrderCard = ({ item: { image, name, price, restaurant } }: Props) => {
  return (
    <Card className="my-1.5 p-3 rounded-xl flex-row items-center">
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        className="w-12 h-12 rounded-lg mr-3"
      />
      <View className="mr-3">
        <Text className="text-base">{name}</Text>
        <Text className="text-slate-400 text-xs">{restaurant}</Text>
        <Text className="mt-2 text-primary text-lg font-extrabold">${price}</Text>
      </View>

      <Button className="absolute top-2 right-5">
        <Text className="ml-auto text-orange-600 font-bold text-2xl">x</Text>
      </Button>
    </Card>
  )
}

export default OrderCard
