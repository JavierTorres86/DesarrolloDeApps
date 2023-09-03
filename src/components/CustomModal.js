import { View, Text,Pressable} from 'react-native'
import React from 'react'
import styles from './Style'

const CustomModal = ({setIsModalVisible,clearList}) => {
 
  return (
    <View>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>¿Estas seguro que deseas eliminar la lista? </Text>

          <Pressable onPress={() => clearList()}>
            <Text>SI</Text>
          </Pressable>

          <Pressable onPress={() => setIsModalVisible(false)}>
            <Text> NO </Text>
          </Pressable>
        </View>
    </View>
  )
}

export default CustomModal