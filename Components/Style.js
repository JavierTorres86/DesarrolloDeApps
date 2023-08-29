import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 5000,
  },

  titulo:{
    marginTop:40,
    fontSize: 30,
    borderBottomColor:"red",
    borderBottomWidth: 5,
  },
  input:{
    padding:5,
    fontSize:18,
    borderColor:"black",
  },
  inputcontainer:{
    marginTop:20,
    borderColor:"red",
    borderWidth:1,
    },
  button:{
    marginTop:17,
    marginLeft:10,

  },
  buttoncontainer:{
    flexDirection:"row",
    alignItems: "center",
  },
  list:{
    fontSize:30,
    marginLeft: 30,
  },
  image:{
    height:100,
    width:100,
  },
  lista:{
    marginTop:5,
    borderColor:"blue",
    borderWidth:2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
});
export default styles
