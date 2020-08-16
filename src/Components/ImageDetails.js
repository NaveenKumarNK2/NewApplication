import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';


const ImageDetail = props => {
    

    return (
        
        <View>
        
            <Image source = { props.imageSource} />
            <Text style= {styles.textStyle}>{props.title}</Text>

        </View>
    );

};
const styles = StyleSheet.create({

    textStyle:{
    marginVertical: 50
    }
});



export default ImageDetail;