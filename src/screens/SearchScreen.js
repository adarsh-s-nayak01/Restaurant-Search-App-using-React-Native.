import React,{useState,useEffect} from 'react';
import {View,Text, StyleSheet,FlatList,Button,Image,ScrollView} from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () =>{
    // console.log(props);
    const [term,setTerm]= useState('');
    const [searchApi,results,errorMessage] = useResults();
    // console.log(results);
    const filterResultsByPrice = price =>{
        //price === $ || $$ || $$$
        return results.filter(result =>{
            return result.price === price;
        });
    };
    

    return ( 
    <>
        <SearchBar 
            term={term} 
            // onTermChange={newTerm=>setTerm(newTerm)} 
            // onTermSubmit={() => searchApi()}
            onTermChange={setTerm}//shortened 
            onTermSubmit={()=> searchApi(term)}

        /> 

        {/* i need to add this at the end  */}
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        {/* only if error message is found make space for it and print it. */}
         
        {/* <Text>We have found {results.length} results.  </Text> */}
        
        <ScrollView>
             {/* we should take data from the results of useResults returned val , from yelp and pass it to ResultsList */}
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </ScrollView>

    </>
    );
};

const styles = StyleSheet.create({
    
});

export default SearchScreen;