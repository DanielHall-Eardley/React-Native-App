import React from 'react';
import {Text, View, WebView, ScrollView} from "react-native"

class VideoScreen extends React.Component{
    static navigationOptions={
        title:"Video"
    }
  
render(){
    const {getParam} = this.props.navigation
    const itemId = getParam("itemId", "Id not found")
    
    return(
        <View style={styles.container}>
        <WebView
        source={{uri:`https://www.youtube.com/embed/${itemId}`}}
        style={styles.video}/>
        </View>
    )
}
}

export default VideoScreen

const styles={
container:{
flex: 1,
justifyContent:"center",
alignItems: "stretch"
}
}
