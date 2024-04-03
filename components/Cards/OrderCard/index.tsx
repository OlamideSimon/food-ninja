import React, { useContext } from 'react'
import { Image, ImageProps, View } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { OrderContext, OrderType } from '../../../context/orderContext'
import { Button } from '../../Button'
import { Card, Text } from '../../Themed'

type Props = {
  item: {
    image: ImageProps | string
    name: string
    price: number
    restaurant: string
    noOfOrders: number
  }
}

const OrderCard = ({ item: { image, name, price, restaurant, noOfOrders } }: Props) => {
  const { orders, setOrders } = useContext(OrderContext)

  const addNoOfOrders = () => {
    setOrders((prev: OrderType[]) => {
      return prev.map((order) => {
        if (order.name === name) {
          return {
            ...order,
            noOfOrders: order.noOfOrders + 1,
          }
        }
        return order
      })
    })
  }
  const removeNoOfOrders = () => {
    setOrders((prev: OrderType) => {
      return prev.map((order: { name: string; noOfOrders: number }) => {
        if (order.name === name) {
          return {
            ...order,
            noOfOrders: order.noOfOrders - 1,
          }
        }
        return order
      })
    })
  }

  const checkNoOfOrder = () => noOfOrders > 1

  // const renderRightActions = (progress: any, dragX: any) => {
  //   const trans = dragX.interpolate({
  //     inputRange: [-100, 0],
  //     outputRange: [100, 0],
  //     extrapolate: 'clamp',
  //   })

  //   return (
  //     <View
  //       className="flex-row bg-orange-500 justify-center items-center"
  //       style={{
  //         transform: [
  //           {
  //             translateX: trans ? trans : 2,
  //           },
  //         ],
  //       }}
  //     >
  //       <MaterialIcons name="delete" size={40} color="white" />
  //     </View>
  //   )
  // }

  return (
    <Swipeable renderRightActions={() => null}>
      <Card className="my-1.5 p-3 rounded-xl flex-row items-center">
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          className="w-14 h-14 rounded-lg mr-3"
        />
        <View className="mr-3">
          <Text className="text-base font-bold">{name}</Text>
          <Text className="text-slate-400 text-xs">{restaurant}</Text>
          <Text className="mt-2 text-primary text-lg font-extrabold">${price}</Text>
        </View>

        <View className="flex-row ml-auto items-center space-x-3">
          <Button
            onPress={removeNoOfOrders}
            disabled={!checkNoOfOrder()}
            className="py-1 px-3 bg-primary/20 rounded-xl items-center justify-center"
          >
            <Text className="text-primary font-bold text-2xl">-</Text>
          </Button>
          <Text className="text-lg font-bold">{noOfOrders}</Text>
          <Button
            onPress={addNoOfOrders}
            className="py-1 px-3 bg-primary rounded-xl items-center justify-center"
          >
            <Text className="text-white font-bold text-2xl">+</Text>
          </Button>
        </View>
      </Card>
    </Swipeable>
  )
}

export default OrderCard
