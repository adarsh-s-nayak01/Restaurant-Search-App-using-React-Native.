import React from 'react';
import {View,Text, StyleSheet,FlatList,Button,Image} from 'react-native';


const ResultsDetail = ( {result}  ) =>{
    return (
        <View style={styles.container}>

            <Image style={styles.image} source={{uri: result.image_url}} />
            <Text style={styles.name} >{result.name} </Text>
            <Text >
                {result.rating} Star, {result.review_count} Reviews       
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:10,
    },
    image:{
        width:250,
        height:150,
        borderRadius:4,
        marginBottom:5,
    },
    name:{
        fontWeight: 'bold',
        // fontSize:16,
        fontFamily:'sans-serif',
    }
});

export default ResultsDetail;