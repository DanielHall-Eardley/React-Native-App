import React from 'react';
import { ScrollView, 
Text, TouchableHighlight, View
} from 'react-native';

class PlotSum extends React.Component{
state={
    toggle: false,
}

plotToggleFunction=(toggle)=>{
    this.setState({toggle:!toggle})
    }


render(){
    const {movieTitle, plot} = this.props
    const {toggle} = this.state
return(
    <View style={{
        backgroundColor:'#d8f2ff',
        height:toggle === true? 200 : 60,
    }}> 
    <TouchableHighlight  onPress={()=>this.plotToggleFunction(toggle)}>
    <View style={styles.dropdown}>
    <Text style={{fontSize:20 }}>Read Plot Summary</Text>
    <Text style={{fontSize:40}}>{toggle === false ? "+": "-"}</Text>
    </View>
    </TouchableHighlight>
    <ScrollView style={{margin:8}}>
    <Text style={{fontSize:16, padding:10}}>{plot}</Text>
    </ScrollView>
    </View>
)
}
}

const styles={
        dropdown:{
            flexDirection:"row",
            alignItems: "center",
            justifyContent:"space-between",
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor:"#a8ffdf"
        }

}
export default PlotSum