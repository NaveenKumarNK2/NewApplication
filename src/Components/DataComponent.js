import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


const DataComponent = props => {
    

    return (
        
        <View style={styles.parent}>
        
            <Image source = { props.imageSource}
             style={styles.imageView}  />
            <Text style={styles.textStyle}>{props.name}</Text>
            <Text style={styles.textStyle}>{props.no}</Text>
            <Text style={styles.textStyle}>{props.Address}</Text>
            <Text style={styles.textStyle}>{props.Landmark}</Text>
            <Text style={styles.textStyle}>{props.City}</Text>
           
        </View>
       
    );

};
const styles = StyleSheet.create({

    parent:{
        flex:1,
        backgroundColor:'skyblue',
        borderWidth:3,
        margin:10,
        marginTop:20,
        padding:20,
  },

  imageView:{
    flex:2,
    alignItems:'flex-end',
    justifyContent:'flex-end',
    flexDirection:'column'
    
  },
 
   textStyle:{
        flex:3,
        marginBottom: 5,
        marginVertical:1,
        flexDirection:'column',
        alignItems:'flex-start'
       
      

  }
   
});



export default DataComponent;