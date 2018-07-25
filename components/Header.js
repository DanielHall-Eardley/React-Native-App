import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ()=>{
    return(
    <View style={styles.header}>
    <Text style={{fontSize:28}}> 
    Movie Trailer Search App</Text>
    </View>
    )
}
const styles = {
header:{
    backgroundColor: "#ffe2e2",
    alignItems:"center",
    justifyContent:"center",
    height:80
}
}

export default Header

