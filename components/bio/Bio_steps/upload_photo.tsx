import React, { useState } from 'react'
import { Card, Text, View } from '../../Themed'
import { bioStyles } from '../bio.styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo'
import { Button, Pressable } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Camera, CameraType } from 'expo-camera'

const UploadPhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string>()

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      console.log(result)
    } else {
      alert('You did not select any image.')
    }
  }

  return (
    <>
      <Text style={bioStyles.title}>Upload your ptofile picture</Text>
      <Text style={{ fontSize: 16 }}>
        This data will be displayed in your account for security
      </Text>

      <View className="w-full gap-y-3">
        <Card className="rounded-xl">
          <Pressable
            onPress={pickImageAsync}
            className="w-full justify-center items-center py-5 gap-y-3"
          >
            <Text>
              <FontAwesome name="picture-o" size={50} />
            </Text>
            <Text>From Gallery</Text>
          </Pressable>
        </Card>

        <Card className="rounded-xl">
          <Pressable className="w-full justify-center items-center py-5 gap-y-3">
            <Text>
              <Entypo name="camera" size={50} />
            </Text>
            <Text>From Gallery</Text>
          </Pressable>
        </Card>
      </View>
    </>
  )
}

export default UploadPhoto
