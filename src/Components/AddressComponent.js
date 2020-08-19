import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const AddressComponent = (props) => {
    return(
        
                            
             <View style={styles.parent}>
            
            <Image source = { props.image}
            style={styles.imageView} />                
            <Text style={styles.nameStyle}>{props.name}</Text>
         
            <Text style={styles.textStyle}>{props.No}</Text>
            <Text style={styles.textStyle}>{props.Address}</Text>
            <Text style={styles.textStyle}>{props.Landmark}</Text>
            <Text style={styles.textStyle}>{props.City}</Text>
           
                

           
        
        </View>
    );

   
    };

const styles=StyleSheet.create({
          
   
    parent:{
        flex:1,
        flexDirection:'column',
        alignContent:'flex-end',
        backgroundColor:'skyblue',
        borderWidth:3,
        margin:10,
        marginTop:20,
        padding:20,
       

    },
    nameStyle:{
        flex:2,
        color:'blue',
        fontSize:15,
        fontStyle:'italic',
        alignItems:'flex-end',
        flexDirection:'row'
        
    },
    textStyle:{
        flex:3,
        marginBottom: 5,
        marginVertical:1,
        flexDirection:'column',
        alignItems:"flex-end"
       
       

    },
    imageView:{
        flex:4,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        flexDirection:'column',
        margin:5
        
       

        
    }
});

export default AddressComponent;