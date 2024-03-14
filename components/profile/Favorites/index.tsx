import React from 'react'
import { Text, View } from '../../Themed'
import FavoriteCard from './Favorite'

const favoriteSample = {
  name: 'Olamide Simon',
  image: 'https://picsum.photos/200',
  price: 15,
  restaurant: 'Rainbow sandwich sugarless',
}

const Favorites = () => {
  return (
    <View>
      <Text className="text-xl font-bold">Favorites</Text>
      {new Array(10).fill(1).map((item, index) => (
        <FavoriteCard item={favoriteSample} key={index} />
      ))}
    </View>
  )
}

export default Favorites
