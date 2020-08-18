import React, {useState} from 'react';
import { View, Button}from 'react-native';
import StateComponenets from '../../src/Components/StateComponents';


const StateScreen = () => {
    const [name, setName] = useState('Naveen');
    const click =() => {
        setName('Kumar');
    }
    
    return(
           
           <View>
            <StateComponenets name={name}/>

            <Button
               title='Click'
               onPress ={click}/>
               
            <StateComponenets name={name}/>
          
                              
             <Button
               title='Click'
               onPress ={click}/>    

            <StateComponenets name={name}/>
               <Button
               title='Click'
               onPress ={click}/>
               </View>
               
    );


};

export default StateScreen;
