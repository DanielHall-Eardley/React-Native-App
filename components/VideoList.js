import React from 'react';
import { StyleSheet, Text, View,
 ScrollView, Image, TouchableHighlight
} from 'react-native';
import config from "../config.js"


class VideoList extends React.Component{
render(){
return(
    <ScrollView>{this.props.results.map((video, i)=>{
        return(
          <View style={styles.listItem} key={video.etag}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate("Video", 
          {itemId:video.id.videoId, title: this.props.movieTitle})}>
          <Image style={styles.image}
          source={{uri: video.snippet.thumbnails.medium.url}}/>
          </TouchableHighlight>
          <Text style={styles.title}>{video.snippet.title}</Text>    
          <Text style={styles.text}> Channel: {video.snippet.channelTitle}</Text>
          <Text style={styles.text}>Description: {video.snippet.description}</Text>
          </View>
        )
    })}</ScrollView>
)
}
}

styles={
image:{
    alignSelf: "stretch",
    height: 180
    },
listItem:{
    flex:1,
    margin: 8,
    backgroundColor: "#a8ffdf",
    justifyContent: "center",
    alignItems:"stretch",
    borderRadius:4,
},
title:{
fontSize:16,
backgroundColor:"#f6ffcc",
padding: 4,
alignSelf:"center"

},
text:{
    padding: 5,
    alignSelf:"center"
}    
}

export default VideoList