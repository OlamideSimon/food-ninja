import React from 'react'
import { Card, Text, View } from '../../Themed'
import { bioStyles } from '../bio.styles'
import Entypo from '@expo/vector-icons/Entypo'
import { Pressable } from 'react-native'
import { View as DefaultView } from 'react-native'
import { Button } from '../../Button'

const Location = () => {
  return (
    <>
      <Text style={bioStyles.title}>Set your Location</Text>
      <Text style={{ fontSize: 16 }}>
        This data will be displayed in your account for security
      </Text>

      <Card className="rounded-xl w-full">
        <DefaultView className="w-full px-3 py-5">
          <DefaultView className="flex-row items-center gap-x-1">
            <Text className="text-orange-500 bg-yellow-500 rounded-full items-center p-1">
              <Entypo name="location-pin" size={25} />
            </Text>
            <Text>Your Location</Text>
          </DefaultView>

          <Button className="border border-primary py-5 items-center rounded-2xl mt-3">
            <Text>Set Location</Text>
          </Button>
        </DefaultView>
      </Card>
    </>
  )
}

export default Location
