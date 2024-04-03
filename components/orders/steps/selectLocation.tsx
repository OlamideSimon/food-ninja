import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Card, Text } from '../../Themed'
import { FilledButton } from '../../Button'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = {
  data: { streetName: string }
  onChange: (key: string, value: any) => void
  nextStep: () => void
}

const SelectLocation = ({ data, nextStep, onChange }: Props) => {
  const { streetName } = data
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSearch = async () => {
    try {
      const encodedQuery = encodeURIComponent(searchQuery)
      console.log(encodedQuery)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodedQuery}&format=json`
      )
      const result = await response.json()
      console.log(result)
      if (result && result.length > 0) {
        const { lat, lon } = result[0]
        onChange('location', {
          coords: {
            latitude: parseFloat(lat),
            longitude: parseFloat(lon),
            altitude: null,
            accuracy: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
          },
          timestamp: Date.now(),
        })
        onChange('streetName', `${result[0].display_name}`)
      }
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  return (
    <View className="flex-1">
      <View className="absolute flex-row items-center top-10 left-3 space-x-1 right-3 z-[1] py-3 px-5 bg-white/50 rounded-full">
        <Text className="text-slate-400">
          <Ionicons name="location-sharp" size={20} />
        </Text>
        <TextInput
          placeholder="Search"
          className="flex-1 text-lg text-slate-700"
          autoCapitalize="none"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
      </View>

      <Card className="absolute space-y-3 z-[1] py-5 px-8 rounded-xl bottom-2 left-2 right-2">
        <Text className="text-lg font-bold capitalize text-slate-500">Your location</Text>
        <View className="flex-row items-start space-x-1">
          <Text className="text-amber-600 rounded-full items-center">
            <Ionicons name="location-sharp" size={25} />
          </Text>
          <Text className="text-xl font-bold">{streetName}</Text>
        </View>
        <FilledButton onPress={nextStep} className="py-3">
          Set Location
        </FilledButton>
      </Card>
    </View>
  )
}

export default SelectLocation
