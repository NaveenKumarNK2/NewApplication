import  React,{Component} from 'react';
import { Text, View, Button, TextInput, Alert } from 'react-native';
import styles from './Styles'

class Screens extends Component {

    state= {username: " ", password: " "}

    checkLogin(){
        const {username , password } = this.state
        if(username == 'admin' && password == 'admin'){
            this.props.navigation.navigate('ListScreen')
        }else{
            Alert.alert('Error', 'Username/Password mismatch',[{
                text:'okay'
            }])
        }
    }
    render() {
        const {heading, input, parent } = styles

    return(
        <View  style ={parent} >
            <Text style = {heading}>Students Details </Text>
            <TextInput  style = {input}  placeholder ="username" onChangeText = {text => this.setState ({username: text})}/>
            <TextInput   style = {input}  secureTextEntry = {true} placeholder ="password" onChangeText = {text => this.setState ({password: text})}/>
            <Button 
            onPress = {() => this.checkLogin()} 
            title= 'Log In'
            />
        </View>
    )
    
    }
    

}

export default Screens;