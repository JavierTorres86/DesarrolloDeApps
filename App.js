import {Text, View, TextInput,Pressable,Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './Components/Style.js';

export default function App() {
  return (
    <View style={styles.container}>

<Image
     style= {styles.image}
     source={{
     uri: "https://cdn-icons-png.flaticon.com/512/4797/4797227.png",
     }}
      />

      <Text style= {styles.titulo}>Lista de Compras</Text>


      <View style={styles.buttoncontainer}>
      <View style={styles.inputcontainer}>
         <TextInput style={styles.input} placeholder='Ingrese Producto'/>
      </View>
     <Pressable style={styles.button} onPress={()=> console.log("el boton ha sido presionado")}>
      <Ionicons  name= "add-circle-outline"size={35} color="red"/>
     </Pressable>
     </View>

     <View style= {styles.lista}>
     <Text style= {styles.list} >Harina</Text>
     <Text style= {styles.list} >Cereal</Text>
     
     </View>
    </View>
  );
}

