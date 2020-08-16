import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const AddressComponent = (props) => {
    return(
        <View>
            <Text>{props.name}</Text>
            <Text style={styles.textStyle}>Address {props.Address}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textStyle:{
        marginBottom: 50
    }
});

export default AddressComponent;