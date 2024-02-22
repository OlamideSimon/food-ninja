import { Tabs } from 'expo-router'
import React from 'react'
import { Colors, colors } from '../../constants'
import { Pressable, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { FontAwesome, FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons'
import { Text as CustomText } from '../../components/Themed'

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

const HomeLayout = () => {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: { paddingVertical: 10, height: 70, paddingHorizontal: 10 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View className="flex-row items-center gap-x-2 bg-primary/25 py-3 px-3 rounded-3xl">
                <Foundation name="home" color={colors.green} size={25} />
                <CustomText className="font-semibold">Home</CustomText>
              </View>
            ) : (
              <Text className="text-primary/50">
                <Foundation name="home" size={30} />
              </Text>
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View className="flex-row items-center gap-x-2 bg-primary/25 py-3 px-3 rounded-3xl">
                <FontAwesome name="user" color={colors.green} size={25} />
                <CustomText className="font-semibold">Profile</CustomText>
              </View>
            ) : (
              <Text className="text-primary/50">
                <FontAwesome name="user" size={30} />
              </Text>
            ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View className="flex-row items-center gap-x-2 bg-primary/25 py-3 px-3 rounded-3xl">
                <FontAwesome5 name="shopping-cart" color={colors.green} size={20} />
                <CustomText className="font-semibold">Orders</CustomText>
              </View>
            ) : (
              <Text className="text-primary/50">
                <FontAwesome5 name="shopping-cart" size={25} />
              </Text>
            ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View className="flex-row items-center gap-x-2 bg-primary/25 py-3 px-3 rounded-3xl">
                <Ionicons name="chatbubble-ellipses" color={colors.green} size={25} />
                <CustomText className="font-semibold">Chats</CustomText>
              </View>
            ) : (
              <Text className="text-primary/50">
                <Ionicons name="chatbubble-ellipses" size={30} />
              </Text>
            ),
        }}
      />
    </Tabs>
  )
}

export default HomeLayout
