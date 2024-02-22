import React from 'react'
import { bioStyles } from '../bio.styles'
import { Card, Text, View } from '../../Themed'

const PaymentMethod = () => {
  return (
    <>
      <Text style={bioStyles.title}>Payment Method</Text>
      <Text style={{ fontSize: 16 }}>
        This data will be displayed in your account for security
      </Text>

      <View className="w-full gap-5">
        <Card className="py-6  w-full rounded-xl">
          <Text className="text-center font-extrabold text-3xl">PayPal</Text>
        </Card>
        <Card className="py-6  w-full rounded-xl">
          <Text className="text-center font-extrabold text-3xl">Visa</Text>
        </Card>
        <Card className="py-6  w-full rounded-xl">
          <Text className="text-center font-extrabold text-3xl">Payoneer</Text>
        </Card>
      </View>
    </>
  )
}

export default PaymentMethod
