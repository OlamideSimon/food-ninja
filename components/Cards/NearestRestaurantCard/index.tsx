import { Link } from 'expo-router'
import React from 'react'
import { Image, ImageProps } from 'react-native'
import { Card, Text } from '../../Themed'

type NearestRestaurantCardProps = {
  item: {
    image: ImageProps | undefined
    name: string
    distance: string
  }
  className?: string
}

const NearestRestaurantCard = ({ item, className }: NearestRestaurantCardProps) => {
  const { distance, image, name } = item

  return (
    <Link href={'/(stack-screens)/restaurant/1'} className={`${className}`}>
      <Card className="items-center justify-center w-[125px] rounded-3xl h-[200px] px-4 gap-y-1">
        <Image source={image!} className="w-fit" />
        <Text className="font-bold text-xl text-center leading-5">{name}</Text>
        <Text className="text-slate-500">{distance}</Text>
      </Card>
    </Link>
  )
}

export default NearestRestaurantCard
