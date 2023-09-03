import { View, Text } from 'react-native'
import React from 'react'
import styles from './Style'
const ListItem = ({item}) => {
  return (    
    <View>
     <Text style= {styles.list} > {item.text} </Text>
    </View>
  );
};

export default ListItem;