import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import AppContainer from '../../components/AppContainer'
import { Button, StepperFormBackButton } from '../../components/Button'
import SuccessScreen from '../../components/SuccessScreen'
import { Text, View } from '../../components/Themed'
import Location from '../../components/bio/Bio_steps/location'
import PaymentMethod from '../../components/bio/Bio_steps/payment_method'
import PersonalDetails from '../../components/bio/Bio_steps/personal_details'
import PreviewPhoto from '../../components/bio/Bio_steps/preview_photo'
import UploadPhoto from '../../components/bio/Bio_steps/upload_photo'

const ProfileDetails = () => {
  const router = useRouter()
  const [step, setStep] = useState<number>(1)

  const nextStep = () => {
    setStep(step < 6 ? step + 1 : 6)
  }

  const prevStep = () => {
    setStep(step > 1 ? step - 1 : 1)
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (step > 1) {
        setStep(step - 1)
        return true
      } else {
        router.back()
        return false
      }
    })

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => {
        if (step > 1) {
          setStep(step - 1)
          return true
        } else {
          router.back()
          return false
        }
      })
    }
  }, [step])

  const bioSteps: any = {
    1: <PersonalDetails />,
    2: <PaymentMethod />,
    3: <UploadPhoto />,
    4: <PreviewPhoto />,
    5: <Location />,
  }

  return step > 5 ? (
    <SuccessScreen
      message="Your Profile is ready to use"
      buttonText="Continue"
      link="/"
    />
  ) : (
    <>
      <AppContainer hideBackButton hideHeader>
        {step > 1 && step < 6 && <StepperFormBackButton previousStep={prevStep} />}
        <View
          style={{
            flex: 1,
            paddingTop: step < 6 && step > 1 ? 20 : 100,
            paddingHorizontal: 20,
            gap: 20,
          }}
        >
          {bioSteps[step]}
        </View>
      </AppContainer>

      <View className="absolute bottom-6 px-[20%] justify-center w-full">
        <Button
          className="bg-primary py-4 justify-center items-center rounded-xl my-5"
          onPress={nextStep}
        >
          <Text className="text-white text-2xl font-semibold">Next</Text>
        </Button>
      </View>
    </>
  )
}

export default ProfileDetails
