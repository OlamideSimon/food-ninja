import React from 'react'
import { Card, Text } from '../../Themed'
import { Image, ImageProps, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../../../constants'

type TestimonialCardProps = {
  item: {
    image: ImageProps | undefined
    name: string
    testimonial: string
    star: number
  }
}

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  const { image, name, star, testimonial } = item

  return (
    <Card className="py-3 px-5 flex-row h-[100px] my-2 rounded-2xl items-center">
      <Image source={image!} className="w-16 h-16 mr-2" />

      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-lg font-bold">{name}</Text>
          <View className="ml-auto flex-row bg-primary/20 py-1 px-2 rounded-xl items-center">
            <AntDesign name="star" color={colors.green} size={17} />
            <Text className="text-lg mx-1">{star}</Text>
          </View>
        </View>
        <Text className="overflow-hidden">{testimonial}</Text>
      </View>
    </Card>
  )
}

export default TestimonialCard
