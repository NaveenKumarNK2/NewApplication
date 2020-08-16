import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import AddressComponent from '../Components/AddressComponent';

const ListScreen = () => {
    const friends = [
        {name : 'murugan', Address: '2/203,Ambalcolony,Tirupur'},
        {name : 'Branitharan' , Address: '2/204,Ambalcolony,Tirupur'},
        {name : 'Naveenkumar',Address: '2/205,Ambalcolony,Tirupur'},
        {name : 'Senthil', Address: '2/202,Ambalcolony,Tirupur'},
        {name : 'santhosh', Address:'2/206,Ambalcolony,Tirupur'},
        {name : 'John', Address: '2/207,Ambalcolony,Tirupur'},
        {name : 'ashik',Address: '2/209,Ambalcolony,Tirupur'},
        {name : 'Thiru',Address: '2/208,Ambalcolony,Tirupur'},
        {name : 'Senthilkumar', Address: '2/203,Ambalcolony,Tirupur'},
        {name : 'saran', Address:'2/203,Ambalcolony,Tirupur'},
        {name : 'sineevasan', Address: '2/203,Ambalcolony,Tirupur'},
        {name : 'mubarak',Address: '2/203,Ambalcolony,Tirupur'}
    ];
    return(
       < FlatList
       keyExtractor = {friend => friend.name}
       data = {friends}
       renderItem = {({item}) => {
           return (
                <AddressComponent name = {item.name} Address = {item.Address}/>
           );
           
       }}
       />
    );
};

export default ListScreen;