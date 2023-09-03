import React,{useState} from 'react';
import {View,FlatList,Modal} from 'react-native';
import styles from './src/components/Style.js';
import AddItem  from './src/components/AddItem.js';
import ListItem from './src/components/ListItem.js';
import CustomModal from './src/components/CustomModal.js';
import ClearList from './src/components/ClearList.js';
import Principal from './src/components/Principal.js';
import ModalProductos from './src/components/ModalProductos.js';



export default function App() {

const initialState = [
  {id:1, text: "harina"},
  {id:2, text: "azucar"},
  {id:3, text: "cereales"},
];
const [text, setText]= useState("");
const [list, setList]= useState(initialState);
const [isModalVisible, setIsModalVisible] = useState(false);
const [isModalProducto, setIsModalProducto] = useState(false);




const addItem = () => { 
  list.push({
    id: Math.random(),
    text:text,
    });
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
         <CustomModal setIsModalVisible ={setIsModalVisible} IsModalVisible={isModalVisible}
          clearList={clearList}/>
      </Modal>
       <Modal transparent={true} visible={isModalProducto}>
         <ModalProductos setIsModalProducto ={setIsModalProducto} isModalProducto={isModalProducto} />
      </Modal>
      </View>
      <Principal/>
      <AddItem text ={text} setText={setText} addItem={addItem}/>
      <FlatList
      data={list}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <ListItem item={item} />}
      />
      <ClearList setIsModalVisible={setIsModalVisible}/>
      </View>
    );
}

