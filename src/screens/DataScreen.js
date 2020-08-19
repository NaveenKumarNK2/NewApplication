import React from 'react';
import { View } from 'react-native';


import DataComponent from '../Components/DataComponent';
import { ScrollView } from 'react-native-gesture-handler';


const DataScreen = () => {

   
    return(
    

    <View>
    <ScrollView>
        
            < DataComponent name = "Naveen" no= "No.2"
            Address='2/205,Ambalcolony,'Landmark='Avinashi,'City='Tirupur - 641654'
             imageSource = {require('../../assets/forest.jpg')} />
            < DataComponent  name = "Kumar" no= "No.2"
            Address='2/205,Ambalcolony,'Landmark='Avinashi,'City='Tirupur - 641654'
            imageSource = {require('../../assets/beach.jpg')} />
            < DataComponent name = "Murugan" no= "No.2"
            Address='2/205,Ambalcolony,'Landmark='Avinashi,'City='Tirupur - 641654'
             imageSource = {require('../../assets/mountain.jpg')} />
             < DataComponent name = "Saravanan" no= "No.2"
            Address='2/205,Ambalcolony,'Landmark='Avinashi,'City='Tirupur - 641654'
             imageSource = {require('../../assets/forest.jpg')} />
               < DataComponent name = "Senthil" no= "No.2"
            Address='2/205,Ambalcolony,'Landmark='Avinashi,'City='Tirupur - 641654'
             imageSource = {require('../../assets/beach.jpg')} />
            
            </ScrollView>
        
        </View>
    );
};
    



export default DataScreen ;