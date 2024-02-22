import React from 'react'
import { Text, TextInput, View } from '../../Themed'
import { Pressable, View as RNView } from 'react-native'

const ResetPassword = () => {
  return (
    <>
      <Text className="text-3xl font-bold">Forgot Password?</Text>
      <Text className="text-sm">Select contact method to reset your password</Text>

      <TextInput
        className="rounded-xl pr-4 h-[60px] my-2 px-[10px]"
        placeholder="New Password"
        //   value="Simon"
        passwordRules={'required: upper; required: lower; required: digit;'}
        secureTextEntry
      />

      <TextInput
        className="rounded-xl pr-4 h-[60px] my-2 px-[10px]"
        placeholder="Confirm Password"
        //   value="Simon"
        passwordRules={'required: upper; required: lower; required: digit;'}
        secureTextEntry
      />
    </>
  )
}

export default ResetPassword
