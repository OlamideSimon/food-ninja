import React from 'react'
import { ColorSchemeName, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import { useRouter } from 'expo-router'

const OnboardingScreen = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const router = useRouter()
  const bg_color = colorScheme === 'dark' ? '#000' : '#fff'
  const illustration_1 =
    colorScheme === 'dark'
      ? require('../../assets/images/onboarding/Illustration-1.png')
      : require('../../assets/images/onboarding/illustration-light-1.png')

  const illustration_2 =
    colorScheme === 'dark'
      ? require('../../assets/images/onboarding/illustration-2.png')
      : require('../../assets/images/onboarding/illustration-light-2.png')

  return (
    <Onboarding
      showSkip={false}
      bottomBarHighlight={false}
      onDone={() => {
        router.replace('/(auth)/signin')
      }}
      transitionAnimationDuration={1000}
      titleStyles={{
        fontSize: 25,
        fontWeight: '900',
        maxWidth: 300,
        textTransform: 'capitalize',
      }}
      pages={[
        {
          backgroundColor: bg_color,
          image: <Image source={illustration_1} />,
          title: 'Find your comfort food here',
          subtitle:
            'Here you can find a chef or a dish for every taste and color. Enjoy!',
        },
        {
          backgroundColor: bg_color,
          image: <Image source={illustration_2} />,
          title: 'food Ninja is where your comfort food lives',
          subtitle: 'Enjoy a fast and easy food delivery at your doorstep',
        },
      ]}
    />
  )
}

export default OnboardingScreen
