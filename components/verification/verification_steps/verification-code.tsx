import React from 'react'
import { Text, TextInput, View } from '../../Themed'
import { Pressable, View as RNView } from 'react-native'
import { useRouter } from 'expo-router'

const VerificationCode = () => {
  return (
    <>
      <Text className="text-3xl font-bold">Enter 4-digit verification code</Text>
      <Text className="text-sm">
        Code sent to +2348128981530. Code will expire in 2 minutes
      </Text>

      <View className="flex-row gap-x-2 justify-center">
        <TextInput
          maxLength={1}
          value="1"
          keyboardType="number-pad"
          className="text-center rounded-2xl p-5 text-2xl font-bold"
        />
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          value="2"
          className="text-center rounded-2xl p-5 text-2xl font-bold"
        />
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          value="3"
          className="text-center rounded-2xl p-5 text-2xl font-bold"
        />
        <TextInput
          maxLength={1}
          keyboardType="number-pad"
          value="4"
          className="text-center rounded-2xl p-5 text-2xl font-bold"
        />
      </View>
    </>
  )
}

export default VerificationCode
