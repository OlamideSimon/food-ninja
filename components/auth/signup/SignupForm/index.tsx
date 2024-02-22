import React from 'react'
import { Pressable } from 'react-native'
import { authStyles } from '../../styles'
import { colors } from '../../../../constants'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useRouter } from 'expo-router'
import { Text, TextInput, View } from '../../../Themed'
import { Button } from '../../../Button'

const SignupForm = () => {
  const router = useRouter()
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...authStyles.title, marginBottom: 20 }}>Sign up for free</Text>

      <TextInput
        style={authStyles.input}
        keyboardType="email-address"
        placeholder="Email"
        value="johndoe@gmail.com"
      />
      <TextInput
        secureTextEntry
        value="testing123"
        placeholder="Password"
        style={authStyles.input}
        passwordRules={'required: upper; required: lower; required: digit;'}
      />

      <BouncyCheckbox
        size={20}
        fillColor={colors.green}
        unfillColor="#FFFFFF"
        text="Email me about social pricing and offers"
        iconStyle={{ borderColor: colors.green }}
        innerIconStyle={{ borderWidth: 1 }}
        onPress={(isChecked: boolean) => {}}
        textStyle={{
          textDecorationLine: 'none',
        }}
        className="px-4"
      />

      <View style={authStyles.button_container}>
        <Button
          className="bg-primary py-4 rounded-xl justify-center items-center mt-5 mb-2"
          onPress={() => router.push('/bio')}
        >
          <Text className="text-white text-2xl font-bold">Create Account</Text>
        </Button>
      </View>

      <Text
        style={{
          color: colors.green,
          textTransform: 'capitalize',
          textAlign: 'center',
        }}
        onPress={() => router.push('/(auth)/signin')}
      >
        Already have an account?
      </Text>
    </View>
  )
}

export default SignupForm
