import { View,Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './Style';
const ClearList = ({setIsModalVisible}) => {
  return (
    <View>
     <Pressable style={styles.button} onPress={() => setIsModalVisible(true)}>
        <Ionicons name="trash" size={40} color="red" />
      </Pressable>
    </View>
  )
}

export default ClearList