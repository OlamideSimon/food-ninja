import { bioStyles } from '../bio.styles'
import React from 'react'
import { Text, View } from '../../Themed'
import { Image } from 'react-native'
import { images } from '../../../constants'

const PreviewPhoto = () => {
  return (
    <>
      <Text style={bioStyles.title}>Preview your profile picture</Text>
      <Text style={{ fontSize: 16 }}>
        This data will be displayed in your account for security
      </Text>

      <View className="w-full justify-center items-center">
        <Image source={images.photo} />
      </View>
    </>
  )
}

export default PreviewPhoto
