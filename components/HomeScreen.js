import React from 'react';
import { View } from 'react-native';
import Header from "./Header.js"
import SearchBar from "./SearchBar";
import VideoList from "./VideoList.js"
const YTSearch = require("youtube-api-search")
import config from "../config.js"

class HomeScreen extends React.Component {

    state={
        searchText:"New Movie Trailers",
        loading:false,
        results:[],
        movieTitle:""
      }
      
      enterText=(text)=>{
        this.setState({
          searchText:text
        })
      }
      
      submitSearch=()=>{
        this.setState({loading:true})
        YTSearch({key: config.apiKeyYoutube, term:this.state.searchText +" trailer", type:"video"},
        ((res)=>{
        this.setState({
        loading: false,
        results:res,
        searchText:"",
        movieTitle:this.state.searchText
        })
        }))
      }
      
      componentDidMount(){
        this.submitSearch()
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
        navigation={this.props.navigation}
        movieTitle={this.state.movieTitle}/>
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
    },
  }

export default HomeScreen

  