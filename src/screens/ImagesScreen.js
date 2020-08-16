import React from 'react';
import { View } from 'react-native';


import ImageDetail from '../Components/ImageDetails';


const ImagesScreen = () => {

   
    return(
    

    <View>
        
            < ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')} />
            <ImageDetail title = "Beach" imageSource = {require('../../assets/beach.jpg')} />
            <ImageDetail title = "Mountain" imageSource = {require('../../assets/mountain.jpg')} />
            <ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')} />
            <ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')} />
            <ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')} />
            <ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')} />
            <ImageDetail title = "Forest" imageSource = {require('../../assets/forest.jpg')} />
        </View>
    );
};
    



export default ImagesScreen ;