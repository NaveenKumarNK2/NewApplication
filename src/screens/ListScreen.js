import React from 'react';
import {StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () =>{
    const titles = [
        {title: 'Forest'},
        {title: 'Beach'},
        {title: 'Mountain'}
    ];
    return(
        
        <FlatList
        
        keyExtractor = {title => title.title}
        data = {titles}
        renderItem={({item})=> {
            
            
            return <Text style = {Styles.textStyle}>{item.title}</Text>;
            
        }
     }/>
    );
};
const styles = StyleSheet.create ({
    
    textStyle:{
            marginVertical:30
        }
   
   

});
export default ListScreen;