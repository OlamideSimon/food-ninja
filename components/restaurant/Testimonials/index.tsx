import React from 'react'
import { View } from 'react-native'
import { Text } from '../../Themed'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { images } from '../../../constants'
import TestimonialCard from '../../Cards/TestimonialCard'

const sampleTestimonials = {
  image: images.photo,
  name: 'Olamide Simon',
  star: 4,
  testimonial: 'Feels good!',
}

const Testimonials = () => {
  return (
    <View>
      <Text className="text-xl font-bold">Testimonials</Text>

      <View>
        {new Array(10).fill(sampleTestimonials).map((item, index) => (
          <TestimonialCard item={item} key={index} />
        ))}
      </View>
    </View>
  )
}

export default Testimonials
