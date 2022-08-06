import React from 'react';
import {View,TextInput, StyleSheet,FlatList,Button,Image} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) =>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            {/* <Ionicons name="ios-search-circle-sharp" /> */}
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Search'
                value={term}
                onChangeText={newTerm=>onTermChange(newTerm)}
                // onChangeText={onTermChange}
                //specifying when to send command to search.
                onEndEditing={() => onTermSubmit()}//onEndEditing={onTermSubmit}
             />
            
        </View>
    );
    
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height: 45,
        borderRadius:7,
        marginHorizontal:15,
        margin:10,
        flexDirection:'row',
        marginBottom:10,
        
    },
    inputStyle:{
        // borderColor: 'black',
        // borderWidth:2,
        flex:1,
        fontSize:18,
        margin:3,
        // borderRadius:7,

    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:5,

    },
  
});

export default SearchBar;