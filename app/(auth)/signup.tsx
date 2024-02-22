import React from 'react'
import { useColorScheme, Image } from 'react-native'
import { images } from '../../constants'
import AppContainer from '../../components/AppContainer'
import SignupForm from '../../components/auth/signup/SignupForm'
import { View } from '../../components/Themed'

const SignUp = () => {
  const colorScheme = useColorScheme()
  const logo = colorScheme === 'dark' ? images.logo_dark : images.logo

  return (
    <AppContainer hideBackButton hideHeader>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
            marginTop: 100,
          }}
        >
          <Image source={logo} />
        </View>
        <View style={{ flex: 1 }}>
          <SignupForm />
        </View>
      </View>
    </AppContainer>
  )
}

export default SignUp
