import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StateComponent = (props) => {
    return(
        <View >
    <Text style={styles.textStyle}>{props.name}</Text>
   
           
            
    </View>
    )
}
const styles = StyleSheet.create({

        
        textStyle:{
            marginHorizontal:30,
            marginBottom:20,
            marginTop:20,
        
        },
      
    
    });
export default StateComponent;