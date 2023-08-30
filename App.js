import React,{useState} from 'react';
import {Text, View, TextInput,Pressable,Image,FlatList,Modal} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './Components/Style.js';



export default function App() {

const initialState = [
  {id:1, text: "harina"},
  {id:2, text: "azucar"},
  {id:3, text: "cereales"},
];
const [text, setText]= useState("");
const [list, setList]= useState(initialState);
const [isModalVisible, setIsModalVisible] = useState(false);


const addItem = () => {
 
  list.push({
    id: Math.random(),
    text:text,
    });
    console.log(list.text)

  setList(list);
  setText("");
};

const clearList = () => {
  setList([]);
  setIsModalVisible(false);
};

  return (
    <View style={styles.container}>
   <View style={styles.centeredView}>
    <Modal transparent={true} visible={isModalVisible}>
      <View style={styles.modalView}>
      <Text style={styles.modalText}>¿Estas seguro que deseas eliminar la lista? </Text>

          <Pressable onPress={() => clearList()}>
            <Text>SI</Text>
          </Pressable>

          <Pressable onPress={() => setIsModalVisible(false)}>
            <Text> NO </Text>
          </Pressable>
        </View>
      </Modal>
      </View>
      
      


<Image
     style= {styles.image}
     source={{
     uri: "https://cdn-icons-png.flaticon.com/512/4797/4797227.png",
     }}
      />

      <Text style= {styles.titulo}>Lista de Compras</Text>


      <View style={styles.buttoncontainer}>
      <View style={styles.inputcontainer}>
         <TextInput style={styles.input} placeholder='Ingrese Producto'
         value={text} onChangeText={(value) => setText(value)}
         />
      </View>
     <Pressable style={styles.button} onPress={()=> addItem()}>
      <Ionicons  name= "add-circle-outline"size={35} color="red"/>
     </Pressable>
     </View>

     <FlatList
     data={list}
     keyExtractor={(item)=>item.id}
     renderItem={({item})=>  (
     <Text style= {styles.list} > {item.text} </Text>
     )}
    />
    <Pressable style={styles.button} onPress={() => setIsModalVisible(true)}>
        <Ionicons name="trash" size={40} color="red" />
      </Pressable>
       </View>
  );
}

