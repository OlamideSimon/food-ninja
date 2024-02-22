import React from 'react'
import { Card, Text, View } from '../../Themed'
import { Image, ImageProps } from 'react-native'
import { Link } from 'expo-router'

type NearestRestaurantCardProps = {
  item: {
    image: ImageProps | undefined
    name: string
    distance: string
  }
}

const NearestRestaurantCard = ({ item }: NearestRestaurantCardProps) => {
  const { distance, image, name } = item

  return (
    <Link href={'/(stack-screens)/restaurant/1'} className="mx-4">
      <Card className="items-center justify-center w-[150px] rounded-3xl h-[200px] px-4 gap-y-1">
        <Image source={image!} className="w-fit" />
        <Text className="font-bold text-xl text-center leading-5">{name}</Text>
        <Text className="text-slate-500">{distance}</Text>
      </Card>
    </Link>
  )
}

export default NearestRestaurantCard
