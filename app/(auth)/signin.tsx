import React from 'react'
import { Image, Switch } from 'react-native'
import { images } from '../../constants'
import SigninForm from '../../components/auth/signin/SigninForm'
import AppContainer from '../../components/AppContainer'
import { useColorScheme } from 'nativewind'
import { View } from '../../components/Themed'

const SignIn = () => {
  const { colorScheme } = useColorScheme()
  const logo = colorScheme === 'dark' ? images.logo_dark : images.logo

  return (
    <AppContainer hideBackButton hideHeader>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <View className="justify-center items-center mb-[50px] mt-[100px]">
          <Image source={logo} />
        </View>
        <View style={{ flex: 1 }}>
          <SigninForm />
        </View>
      </View>
    </AppContainer>
  )
}

export default SignIn
