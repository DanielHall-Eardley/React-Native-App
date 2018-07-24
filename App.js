import React from 'react';
import { StyleSheet, Text, View, Button,
TextInput, ScrollView
} from 'react-native';
const YTSearch = require("youtube-api-search")

const apiKey = "AIzaSyCSbPPXS3p1jntxInrRdyR-MPOvIWGNVLk"


export default class App extends React.Component {

state={
  searchText:"",
  loading:false,
  results:[]
}

enterText=(text)=>{
  this.setState({
    searchText:text
  })
}

submitSearch=()=>{
  this.setState({loading:true})
  YTSearch({key: apiKey, term:this.state.searchText +" trailer", type:"video"},
  ((res)=>{
  this.setState({
  loading: false,
  results:res,
  searchText:"",
  },()=>{console.log(this.state.results)})
  }))
}   

render() {

    return (
      <View style={styles.container}>
      <View style={styles.header}><Text style={{fontSize:28}}> 
      Movie Trailer Search App</Text></View>
      <View style={styles.searchBar}><TextInput style={{fontSize:20, width:225, height:70}}
      placeholder="Search for movie trailers" value={this.state.loading === false ? this.state.searchText:"Loading..."}
       onChangeText={(text)=>this.enterText(text)}
      onSubmitEditing={this.submitSearch}>
      </TextInput></View>
      <View>{this.state.results.map((result, i)=>{
        return(
          <Text>{result.title}</Text>
        )
      })}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'green',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop:30
  },
  header:{
    backgroundColor: "red",
    alignItems:"center",
    justifyContent:"center",
    height:80

  },
  searchBar:{
  backgroundColor:"blue",
  alignItems:"center",

}, 
});
