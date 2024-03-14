import { View, Image } from 'react-native'
import React from 'react'
import { Card, Text } from '../../Themed'
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'
import { Button, FilledButton } from '../../Button'
import { images } from '../../../constants'

type Props = {
  prevStep: () => void
}

const TrackOrder = ({ prevStep }: Props) => {
  return (
    <View className="flex-1">
      <Button
        onPress={prevStep}
        className="absolute flex-row items-center top-10 left-3 z-[1] p-3 bg-yellow-300/50 rounded-lg"
      >
        <Text className="text-amber-900">
          <Entypo name="chevron-left" size={20} />
        </Text>
      </Button>

      <Card className="absolute space-y-3 z-[1] py-5 px-8 rounded-xl bottom-2 left-2 right-2">
        <Text className="text-lg font-bold capitalize text-slate-500">Track Orders</Text>
        <View className="flex-row items-start space-x-1 bg-gray-900 p-3 rounded-xl">
          <Image source={images.photo} className="w-14 h-14 rounded-xl" />
          <View className="space-y-1">
            <Text className="text-xl font-bold">Sushi House</Text>
            <View className="flex-row items-center">
              <Text className="text-primary">
                <Ionicons name="compass-sharp" size={15} />
              </Text>
              <Text className="text-slate-400">Approx. 25 away</Text>
            </View>
          </View>
        </View>

        <View className="flex-row space-x-2">
          <FilledButton className="py-3 w-4/5">
            <FontAwesome name="phone" size={25} className="mr-2" />
          </FilledButton>
          <FilledButton className="py-3 w-1/5 bg-gray-900">
            <Text className="text-primary">
              <Entypo name="mail" size={25} />
            </Text>
          </FilledButton>
        </View>
      </Card>
    </View>
  )
}

export default TrackOrder
