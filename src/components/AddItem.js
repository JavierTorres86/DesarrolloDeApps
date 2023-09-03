import React, { useState } from 'react';
import styles from './Style';
import { View, TextInput, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalProductos,{isModalProducto} from './ModalProductos';

export const AddItem = ({ text, setText, addItem }) => {
const [isModalProducto, setIsModalProducto] = useState(false);
  
  

  const handlePress = () => {
    if (text.length === 0) {
      setIsModalProducto(true);
    } else {
      addItem();
    }
  };

  return (
    <View style={styles.buttoncontainer}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder='Ingrese Producto'
          value={text}
          onChangeText={(value) => setText(value)}
        />
      </View>
      <Pressable style={styles.button} onPress={handlePress}>
        <Ionicons name="add-circle-outline" size={35} color="red" />
      </Pressable>
      {isModalProducto && (
  <ModalProductos
    isModalProducto={isModalProducto} 
    setIsModalProducto={() => setIsModalProducto(false)} 
  />
)}

    </View>
  );
};

export default AddItem;
