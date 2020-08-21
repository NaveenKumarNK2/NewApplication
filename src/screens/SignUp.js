import React from 'react';
import{Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SignUp = props => {

    return(
           
          <View  style={styles.container}>
               <View style={styles.header}>
            <Text style = {styles.heading}>Welcome </Text>
            <Text>Signup into your account</Text></View>

            <View style ={styles.subBorder}>
            <Text  style={{alignSelf:'flex-start',paddingLeft:20,paddingBottom:20}}> Sign Up </Text>

            <TextInput  style = {styles.input}  placeholder ="   Full Name " />
            <TextInput style = {styles.input} placeholder = " E-mail" />
            <TextInput   style = {styles.input}  secureTextEntry = {true} placeholder ="    password " />

            <View  style = {styles.buttonStyle}>
            <Button title = 'Sign Up' /></View></View>

            <View style={styles.loginStyle}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress = {() => props.navigation.navigate('LoginScreen')}>
            <Text style={{color:"green" , alignSelf:"stretch", flexDirection:"row"}}>
            Log In</Text>
            </TouchableOpacity>
            </View>
        </View>


    )
};
const styles = StyleSheet.create({


 container: {
    flex : 1,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    margin:50,
    marginRight:30,
    marginHorizontal:40,
    marginVertical:30,
    marginLeft:30,
    borderRadius:10,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
        },
   header: {
    flex: 1,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    paddingTop:20,
    paddingLeft:20
   },
   subBorder:{
    paddingTop:40,
    paddingBottom:5,
    backgroundColor:'lightgreen',
    marginRight:'5%',
    marginLeft:'5%',
    marginBottom:'10%',
    marginVertical:60,
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
    borderBottomRightRadius:70,
    borderBottomLeftRadius:5,
   },

    heading: {

        fontSize: 25,
       fontWeight:'bold'
    },

    input:{
        width:200,
        marginLeft: 5,
        marginRight: 5,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:4,
        paddingLeft:5,
        borderWidth: 2,
        marginVertical: 5,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    loginStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5

    },
    buttonStyle:{
        width:150,
       borderRadius: 70,     
       marginVertical:30,
       alignSelf:'center',
       
       
    }
});

export default SignUp;