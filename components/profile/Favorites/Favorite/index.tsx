import React from 'react'
import { Card, Text } from '../../../Themed'
import { Image, View } from 'react-native'
import { FilledButton } from '../../../Button'

type Props = {
  item: {
    name: string
    image: string
    price: number
    restaurant: string
  }
}

const FavoriteCard = ({ item: { name, image, price, restaurant } }: Props) => {
  return (
    <Card className="my-1.5 p-5 rounded-xl flex-row items-center">
      <Image source={{ uri: image }} className="w-12 h-12 rounded-lg mr-3" />
      <View className="mr-3">
        <Text className="text-base">{name}</Text>
        <Text className="text-slate-400 text-xs">{restaurant}</Text>
        <Text className="mt-2 text-primary text-lg font-extrabold">${price}</Text>
      </View>

      <FilledButton className="p-2 ml-auto" textClassName="text-sm">
        Buy Again
      </FilledButton>
    </Card>
  )
}

export default FavoriteCard
