import React from 'react'
import { Text, View, TextInput } from '../../Themed'

const PersonalDetails = () => {
  return (
    <>
      <Text className="text-3xl font-bold">Fill in your bio to get started</Text>
      <Text className="text-sm">
        This data will be displayed in your account for security
      </Text>

      <View className="flex-1">
        <TextInput
          className="rounded-xl pr-4 h-[60px] my-2 px-[10px]"
          placeholder="First Name"
          value="Simon"
        />

        <TextInput
          value="Olamide"
          placeholder="Last Name"
          className="rounded-xl pr-4 h-[60px] my-2 px-[10px]"
        />

        <TextInput
          value="08128981530"
          keyboardType="phone-pad"
          placeholder="Mobile Number"
          className="rounded-xl pr-4 h-[60px] my-2 px-[10px]"
        />
      </View>
    </>
  )
}

export default PersonalDetails
