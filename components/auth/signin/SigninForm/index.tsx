import React from 'react'
import { useRouter } from 'expo-router'
import { Button } from '../../../Button'
import { Text, View, TextInput } from '../../../Themed'

const SigninForm = () => {
  const router = useRouter()

  return (
    <View style={{ flex: 1 }}>
      <Text className={`text-2xl font-bold text-center mb-5`}>Login to your Account</Text>

      <TextInput
        keyboardType="email-address"
        placeholder="Email"
        value="johndoe@gmail.com"
        className="my-2.5 rounded-3xl pr-4 h-[55px] px-2.5"
      />
      <TextInput
        secureTextEntry
        value="testing123"
        placeholder="Password"
        passwordRules={'required: upper; required: lower; required: digit;'}
        className="my-2.5 rounded-3xl pr-4 h-[55px] px-2.5"
      />

      <View className="px-[20%] w-full justify-center">
        <Button className="bg-primary py-4 rounded-xl justify-center items-center mt-5 mb-2">
          <Text className="text-white text-2xl font-bold">Login</Text>
        </Button>
      </View>

      <View style={{ marginVertical: 10, gap: 5 }}>
        <Button
          className="flex-1"
          onPress={() => {
            router.push('/reset-password')
          }}
        >
          <Text className="text-primary capitalize text-center">forgot password</Text>
        </Button>
        <Button
          className="flex-1"
          onPress={() => {
            router.push('/(auth)/signup')
          }}
        >
          <Text className="text-primary capitalize text-center">
            Don't have an account ?
          </Text>
        </Button>
      </View>
    </View>
  )
}

export default SigninForm
