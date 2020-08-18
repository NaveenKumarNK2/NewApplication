import React, {useState} from 'react';
import {Text, View, Button, StyleSheet}from 'react-native';

const StateScreen = () => {
    const [name, setName] = useState('Naveen');
    const click =() => {
        setName('Kumar');
    }
    return(
        <View style={styles.textStyle}>
             <Text>Name: {name}</Text>
             <View style={styles.ButtonStyle} />
             <Button
               title='Click'
               onPress ={click}/>
               
        </View>
    );

}
const styles=StyleSheet.create({
    textStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    ButtonStyle:{
        marginTop:20
    }

});
export default StateScreen;
