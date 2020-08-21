import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


const DataComponent = props => {
    

    return (
        
        <View style={styles.parent}>
        
            <Image source = { props.imageSource}
             style={styles.imageView}  />
             <View style={styles.details}>
            <Text>{props.name}</Text>
            <Text>{props.no}</Text>
            <Text>{props.Address}</Text>
            <Text>{props.Landmark}</Text>
            <Text>{props.City}</Text>
            </View>
        </View>
       
    );

};
const styles = StyleSheet.create({

    parent:{
        flex:1,
        backgroundColor:'skyblue',
        borderWidth:3,
        margin:10,
        textAlign:"left",
        padding:10,
        textAlignVertical:"top"
  },

  imageView:{
    flex:2,
    alignItems:'flex-end',
    justifyContent:"flex-end",
    alignSelf:'flex-end',
    flexDirection:'column',
    textAlignVertical:"bottom"
    
    
      
  },
    details:{
        
        flex:3,
       
        
        flexDirection:'column',
        alignItems:'flex-start',
        alignSelf:"flex-start",
        textAlign:"left",
        textAlignVertical:"top",
        
    }
   
});



export default DataComponent;