import { View, Text, Modal,Pressable} from 'react-native'
import React from 'react'
import styles from './Style';



const ModalProductos = ({ isModalProducto, setIsModalProducto }) => {
  return (
    <View>
      <Modal transparent={true} visible={isModalProducto}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>DEBE INGRESAR UN PRODUCTO </Text>
          <Pressable onPress={() => setIsModalProducto(false)}>
            <Text> OK </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};


export default ModalProductos