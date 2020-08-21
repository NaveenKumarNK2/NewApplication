import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const LoginScreen = props  => {

       return(
        
        
       <View  style={styles.container}>
           <View style={styles.header}>
            <Text style = {styles.heading} > Welcome Back  </Text>
            <Text>Login back into your account </Text></View>

            <View style ={styles.subBorder}>
            <Text  style={{color:'white',fontWeight:'bold',
            fontSize:23,alignSelf:'flex-start',paddingLeft:20,paddingBottom:20}}> Log In</Text>

            <TextInput  style = {styles.input}  placeholder ="   E-mail " />
            <TextInput  style = {styles.input}  secureTextEntry = {true} placeholder ="   password "/>
            <Text style={{alignSelf:"flex-end",alignItems:'flex-end',paddingRight:10}}>Forgot Password?</Text>
            
            
             
            <TouchableOpacity style={styles.ButtonStyle}>
            <Text style={styles.TextStyle}> LOGIN </Text>

            </TouchableOpacity>
            
            </View>

             <View style={styles.signupStyle}>
            <Text>Don't have an account yet? </Text>
            <TouchableOpacity onPress = {() => props.navigation.navigate ('SignUp')}>
            <Text style={{color:"green" , alignSelf:"stretch", flexDirection:"row"}}>Join Now</Text></TouchableOpacity>
            </View>
         </View>
         
        
    )
    
    }

const styles = StyleSheet.create({

    container: {
        flex : 1,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        margin:50,
         
        marginHorizontal:30,
        marginVertical:30,
        marginLeft:30,
        marginRight:30,
    
        borderRadius: 10,
        borderColor: '#ddd',
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
        marginRight:10,
        marginLeft:10,
        marginBottom:'5%',
        marginVertical:30,
        borderTopLeftRadius:70,
        borderTopRightRadius:70,
        borderBottomRightRadius:70,
        borderBottomLeftRadius:10
        
    },
            
    heading: {

        fontSize: 25,
        fontWeight:'bold',
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
    ButtonStyle:{
        width:190,
        marginVertical:40,
        alignSelf:'center',
        elevation:2,
        marginLeft:30,
        marginRight:30,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'white',
        borderRadius:30,
        
    
      },
        
    
    TextStyle:{
        alignItems:'center',
        alignSelf:'center'
    },

    
    signupStyle:{
        marginVertical:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    
   
});

    


export default LoginScreen;