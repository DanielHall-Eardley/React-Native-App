import React from 'react';
import { StyleSheet, View, 
TextInput, 
} from 'react-native';

const SearchBar = (props)=>{
return(
    <View style={styles.searchBar}>
    <TextInput style={{fontSize:20, width:225, height:70}}
    placeholder="Search for movie trailers" value={props.loading === false ? props.searchText:"Loading..."}
     onChangeText={(text)=>props.enterText(text)}
    onSubmitEditing={props.submitSearch}>
    </TextInput>
    </View>
)
}

const styles = {
  searchBar:{
  backgroundColor:"#e5ffe2",
  alignItems:"center",
}, 
}

export default SearchBar