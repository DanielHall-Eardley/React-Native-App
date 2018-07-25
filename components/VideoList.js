import React from 'react';
import { StyleSheet, Text, View,
 ScrollView, Image, TouchableHighlight
} from 'react-native';

const VideoList = (props)=>{
return(
    <ScrollView>{props.results.map((video, i)=>{
        return(
          <View style={styles.listItem} key={video.etag}>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate("Video")}>
          <Image style={styles.image}
          source={{uri: video.snippet.thumbnails.medium.url}}/>
          </TouchableHighlight>
          <Text style={styles.title}>{video.snippet.title}</Text>    
          <Text>{video.snippet.channelTitle}</Text>
          <Text>{video.snippet.description}</Text>
          </View>
        )
    })}</ScrollView>
)
}

styles={
image:{
    alignSelf: "stretch",
    height: 180
    },
listItem:{
    margin: 8,
    backgroundColor: "#a8ffdf",
    borderRadius:4,
},
title:{
fontSize:16,
backgroundColor:"#f6ffcc",
alignSelf: "center",
padding: 4
}    
}

export default VideoList