import { View,Pressable,Ionicons } from 'react-native'
import React from 'react'
import styles from './src/components/Style'

const ClearList = (setIsModalVisible) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={() => setIsModalVisible(true)}>
        <Ionicons name="trash" size={40} color="red" />
      </Pressable>
    </View>
  )
}

export default ClearList