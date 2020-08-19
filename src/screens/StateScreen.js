import React, {useState} from 'react';
import { View}from 'react-native';
import StateComponenets from '../../src/Components/StateComponents';


const StateScreen = () => {
    const [name, setName] = useState('Naveen');
    const click =() => {
        setName('Kumar');
    }
    
    return(
           
           <View>

            <StateComponenets name={name} click ={click}/>
            <StateComponenets name={name} click={click}/> 
            <StateComponenets name={name} click={click}/>
           
               
               </View>
               
    );


};

export default StateScreen;
