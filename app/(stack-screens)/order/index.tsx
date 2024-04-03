import * as Location from 'expo-location'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { BackHandler, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import SelectLocation from '../../../components/orders/steps/selectLocation'
import TrackOrder from '../../../components/orders/steps/trackOrder'

const Order = () => {
  const [currentStep, setCurrentStep] = React.useState<number>(1)
  const [data, setData] = React.useState<{
    location: Location.LocationObject
    streetName: string
  }>({
    location: {
      coords: {
        latitude: 0,
        longitude: 0,
        altitude: null,
        accuracy: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: 0,
    },
    streetName: '',
  })
  const { location, streetName } = data

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }

      let userLocation = await Location.getCurrentPositionAsync({})

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLocation.coords.latitude}&lon=${userLocation.coords.longitude}`
        )
        const scrape = await response.json()
        console.log(scrape)
        setData({
          location: userLocation,
          streetName: `${scrape.address.road}, ${scrape.address.city}`,
        })
      } catch (error) {
        console.error('Error fetching street name:', error)
        alert('Error fetching street name')
      }
    })()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1)
        return true
      } else {
        router.back()
        return false
      }
    })

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => {
        if (currentStep > 1) {
          setCurrentStep(currentStep - 1)
          return true
        } else {
          router.back()
          return false
        }
      })
    }
  }, [currentStep])

  const nextStep = () => {
    setCurrentStep(currentStep < 3 ? currentStep + 1 : 3)
  }

  const prevStep = () => {
    if (currentStep < 1) {
      router.back()
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  const onChange = (key: string, value: any) => {
    setData({ ...data, [key]: value })
  }

  const props = {
    nextStep,
    data,
    onChange,
    prevStep,
  }

  const steps: Record<number, JSX.Element> = {
    1: <SelectLocation {...props} />,
    2: <TrackOrder {...props} />,
  }

  console.log(location)

  return (
    <View className="flex-1">
      {location && streetName && (
        <MapView
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="terrain"
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            description="You are here"
          />
        </MapView>
      )}
      {steps[currentStep]}
    </View>
  )
}

export default Order
