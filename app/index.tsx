import { Redirect } from 'expo-router'
import React from 'react'

const Home = () => {
  // return <Redirect href={'/(auth)/signin'} />
  return <Redirect href={'/home/'} />
}

export default Home
