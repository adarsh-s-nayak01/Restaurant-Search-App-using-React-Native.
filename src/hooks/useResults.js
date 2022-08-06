import {useEffect,useState} from 'react';
import {View,Text, StyleSheet,FlatList,Button,Image} from 'react-native';
import yelp from '../api/yelp'

export default() =>{
    const [results, setResults]= useState([]);
    const [errorMessage, setErrorMessage]=useState('');
    
    
    //this is an asynchronomous operation. use .then statement ro async key word.
    const searchApi= async searchTerm =>{
        // console.log('Hi there');
        try{
            const response= await yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'san jose',

                }
            });
            
            setResults(response.data.businesses)
        } catch(err){
            // console.log(err); instead of this  show some simple error to the user.
            setErrorMessage('Something went wrong');
        }
    };
    //call searchApi when component is first rendered.
    // BAD CODE!!!!!!!!!!!
    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi,results,errorMessage];
}