import React from 'react'
import { Pressable, Image } from 'react-native'

import styles from './header.styles'

type Header = {
  iconUrl: any
  dimension: any
  handlePress: () => void
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Header) => {
  return (
    <Pressable style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{ ...styles.btnImg, width: dimension, height: dimension }}
      />
    </Pressable>
  )
}

export default ScreenHeaderBtn
