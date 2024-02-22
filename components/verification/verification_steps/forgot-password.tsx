import React, { useState } from 'react'
import { Pressable, View as RNView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useRouter } from 'expo-router'
import { Card, Text, View } from '../../Themed'
import { colors } from '../../../constants'

const ForgotPassword = () => {
  const [selected, setSelected] = useState('phone')

  return (
    <>
      <Text className="text-3xl font-bold">Forgot Password?</Text>
      <Text className="text-sm">Select contact method to reset your password</Text>

      <Card className={`rounded-2xl border ${selected === 'phone' && 'border-primary'}`}>
        <Pressable
          onPress={() => setSelected('phone')}
          className=" p-5 flex-row items-center gap-x-3"
        >
          <Ionicons name="chatbubble-ellipses" size={40} color={colors.green} />
          <RNView className="gap-y-1">
            <Text className="text-lg text-gray-500">Via SMS:</Text>
            <Text className="text-lg tracking-widest">+2348128981530</Text>
          </RNView>
        </Pressable>
      </Card>

      <Card className={`rounded-2xl border ${selected === 'email' && 'border-primary'}`}>
        <Pressable
          onPress={() => setSelected('email')}
          className="p-5 flex-row items-center gap-x-3"
        >
          <MaterialIcons name="email" size={40} color={colors.green} />
          <RNView className="gap-y-1">
            <Text className="text-lg text-gray-500">Via email:</Text>
            <Text className="text-lg tracking-widest">simonolamide@me.com</Text>
          </RNView>
        </Pressable>
      </Card>
    </>
  )
}

export default ForgotPassword
