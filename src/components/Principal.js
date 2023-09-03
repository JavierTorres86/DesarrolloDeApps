import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Style'

const Principal = () => {
  return (
    <View>
    <Image
     style= {styles.image}
     source={{
     uri: "https://cdn-icons-png.flaticon.com/512/4797/4797227.png",
     }}
      />
      <Text style= {styles.titulo}>Lista de Compras</Text>
    </View>
  )
}

export default Principal