import  React,{Component} from 'react';
import { Text, View, Button, TextInput, Alert, ImageBackground } from 'react-native';
import styles from './Styles'
import bgImage from '../../assets/bgg.jpg'

class Screens extends Component {

    state= {username: " ", password: " "}

    checkLogin(){
        const { username , password } = this.state
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
        
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
       <View  style ={parent} >
            <Text style = {heading}>Students Details </Text>
            <TextInput  style = {input}  placeholder ="   user name " onChangeText = {text => this.setState ({username: text})}/>
            <TextInput   style = {input}  secureTextEntry = {true} placeholder ="    password " onChangeText = {text => this.setState ({password: text})}/>
            <Button 
            onPress = {() => this.checkLogin()} 
            title= 'Log In'
            />
         </View>
         </ImageBackground>
        
    )
    
    }
    

}

export default Screens;