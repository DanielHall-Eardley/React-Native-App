import React from 'react';
import {Text, View, WebView} from "react-native"

class VideoScreen extends React.Component{

    getMoviePlot=(title)=>{
fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&language=en-US&api_key=234fc3baa7a94ed54a0d6fc44e1a2f24`)
.then((res)=>{
    console.log(res.body)
})
}

render(){
    const {getParam} = this.props.navigation
    const itemId = getParam("itemId", "Id not found")
    const title = getParam("title", "Title not found")
    console.log(title)
    return(
        <View style={styles.container}>
        <WebView
        source={{uri:`https://www.youtube.com/embed/${itemId}`}}
        style={styles.video}
        />
        <Text style={styles.moviePlot}>{this.getMoviePlot(title)}</Text>
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
},
video:{
    
},
moviePlot:{
    
}
}