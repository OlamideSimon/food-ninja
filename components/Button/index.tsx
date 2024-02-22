import React, { PropsWithChildren } from 'react'
import { Pressable, PressableProps, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export type ButtonProps = PressableProps &
  Partial<{
    onPress: () => void
    className: string
  }>

export const Button = ({
  children,
  className,
  onPress,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Pressable className={`${className}`} onPress={onPress} {...props}>
      {children}
    </Pressable>
  )
}

export const StepperFormBackButton = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <View className="ml-5 mt-10 h-16">
      <Button
        onPress={previousStep}
        className="bg-orange-100 w-[45px] h-[45px] rounded-xl justify-center items-center"
      >
        <Icon name="chevron-left" color={'#DA6317'} size={26} />
      </Button>
    </View>
  )
}

export const BackButton = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <View className="">
      <Button onPress={previousStep} className="rounded-xl justify-center items-center">
        <Icon name="chevron-left" color={'#DA6317'} size={40} />
      </Button>
    </View>
  )
}