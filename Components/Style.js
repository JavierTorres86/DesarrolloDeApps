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
    marginLeft: -30,
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
});
export default styles
