import React from 'react';
import { View } from 'react-native';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList.js"
import PlotSum from "./PlotSum"
const YTSearch = require("youtube-api-search")
import config from "../config.js"

class HomeScreen extends React.Component {
static navigationOptions={
title: "Home"
}
    
state={
  searchText:"New Movie Trailers",
  loading:false,
  results:[],
  movieTitle:"",
  plot:""
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
      movieTitle:this.state.searchText,
      },()=>{this.getMoviePlot(this.state.movieTitle, config.apiKeyMoviedb)})
      }))
}

getMoviePlot=(movieTitle, key)=>{ 
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieTitle}`)
  .then((res)=>{
    return res.json()
  }).then((res)=>{
  if(res.total_results === 0){
    this.setState({plot:"No Plot Summary Available"})
  }else{
    let returnedMovie = res.results.find((movie)=>{
    return movie.title.toLowerCase() === movieTitle.toLowerCase()
    })
    if(returnedMovie){
      this.setState({plot: returnedMovie.overview})
    }else if (returnedMovie === undefined){
      this.setState({plot: "No Plot Summary Available"})
    }
    }
  })
  .catch((err)=>{
    console.log(err)
  })
  }
      
componentWillMount(){
  this.submitSearch()
}

  render() {
    return (
        <View style={styles.container}>
    

        <SearchBar loading={this.state.loading}
        searchText={this.state.searchText}
        enterText={this.enterText}
        submitSearch={this.submitSearch}/>

        <PlotSum movieTitle={this.state.movieTitle}
        plot={this.state.plot}/>

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

  