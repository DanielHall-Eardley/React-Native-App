import React from 'react';
import { View } from 'react-native';
import Header from "./components/Header.js"
import SearchBar from './components/SearchBar.js';
import VideoList from "./components/VideoList.js"
import {createStackNavigator} from "react-navigation"
const YTSearch = require("youtube-api-search")
import config from "/config.js"



class HomeScreen extends React.Component {

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
        YTSearch({key: config.apiKey, term:this.state.searchText +" trailer", type:"video"},
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
        <Header/>
        <SearchBar loading={this.state.loading}
        searchText={this.state.searchText}
        enterText={this.enterText}
        submitSearch={this.submitSearch}/>
        <VideoList results={this.state.results}
        navigation={this.props.navigation}/>
        </View>
    );
  }
}

const styles = {
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#d8f2ff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      paddingTop:30
    },
  }

export default HomeScreen

  