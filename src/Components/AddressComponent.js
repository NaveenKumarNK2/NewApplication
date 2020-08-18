import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const AddressComponent = (props) => {
    return(
        <View 
             style={styles.parent}>
            <Text style={styles.nameStyle}>{props.name}</Text>
            <Text style={styles.textStyle}>{props.No}</Text>
            <Text style={styles.textStyle}>{props.Address}</Text>
            <Text style={styles.textStyle}>{props.Landmark}</Text>
            <Text style={styles.textStyle}>{props.City}</Text>
        
        </View>
    );
};

const styles=StyleSheet.create({
          
    textStyle:{
        marginBottom: 5,
        marginVertical:1,
        marginHorizontal:30
    },
    parent:{
        
        flexDirection:'column',
        backgroundColor:'skyblue',
        borderWidth:3,
        margin:10,
        marginTop:20,
        padding:20

    },
    nameStyle:{
        color:'blue',
        fontSize:15,
        marginHorizontal:30,
        fontStyle:'italic'
    }
});

export default AddressComponent;