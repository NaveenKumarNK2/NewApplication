import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View,Image } from 'react-native';
import AddressComponent from '../Components/AddressComponent';

const ListScreen = () => {
    const friends = [
    
        {name : 'Naveenkumar',No:'No.22',Address: '2/205,Ambalcolony,',Landmark:'Avinashi,',City:'Tirupur - 641654',
       }, 
        {name : 'Senthil', No:'No.23',Address: '2/202,Ambalcolony,', Landmark:'Avinashi,',City:'Tirupur - 641654'
         },
        {name : 'santhosh', No:'No.24', Address:'2/206,Ambalcolony,',Landmark:'Avinashi',City:'Tirupur- 641654'},
        {name : 'John', No:'No.25',Address: '2/207,Ambalcolony,',Landmark:'Avinashi,',City:'Tirupur- 641654'},
        {name : 'ashik',No:'No.26',Address: '2/209,Ambalcolony,', Landmark:'Avinashi,',City:'Tirupur- 641654'},
        {name : 'karthi',No:'No.27',Address: '2/208,Ambalcolony,',Landmark:'Avinashi,',City:'Tirupur- 641654'},
        {name : 'Senthilkumar',No:'No.28', Address: '2/203,Ambalcolony,',Landmark:'Avinashi,',City:'Tirupur- 641654'},
      
    ];
    
    

    return(
       < FlatList
       keyExtractor = {friend => friend.name}
       data = {friends}
       renderItem = {({item}) => {
           return (
               <View>
                <AddressComponent name = {item.name} No = {item.No} Address = {item.Address} Landmark ={item.Landmark}
                City = {item.City}  image ={require('../../assets/forest.jpg')} />
               
                
            </View>
          
                
           );
           
       }}
       />
    );
    
};


export default ListScreen;