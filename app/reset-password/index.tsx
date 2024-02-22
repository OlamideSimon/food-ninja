import React, { useState } from 'react'
import AppContainer from '../../components/AppContainer'
import { Button, StepperFormBackButton } from '../../components/Button'
import { Text, View } from '../../components/Themed'
import SuccessScreen from '../../components/SuccessScreen'
import ForgotPassword from '../../components/verification/verification_steps/forgot-password'
import ResetPassword from '../../components/verification/verification_steps/reset-password'
import VerificationCode from '../../components/verification/verification_steps/verification-code'

const ResetPasswordPage = () => {
  const [step, setStep] = useState<number>(1)

  const nextStep = () => {
    setStep(step < 4 ? step + 1 : 4)
  }

  const prevStep = () => {
    setStep(step > 1 ? step - 1 : 1)
  }

  const bioSteps: { [key: number]: React.ReactNode } = {
    1: <ForgotPassword />,
    2: <VerificationCode />,
    3: <ResetPassword />,
  }

  return step > 3 ? (
    <SuccessScreen
      message="Password reset successful!"
      buttonText="Go to Login"
      link="/(auth)/signin"
    />
  ) : (
    <>
      <AppContainer hideBackButton hideHeader>
        {step > 1 && step < 4 && <StepperFormBackButton previousStep={prevStep} />}
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

export default ResetPasswordPage
