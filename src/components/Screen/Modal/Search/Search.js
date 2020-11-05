import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SearchBar } from 'react-native-elements';


const Search = () => {

    const [search, setSearch] = useState('');

    return(
        <View>
            <Text>Search</Text>
            <SearchBar
                placeholder="Type Here..."
                value={search}
                onChangeText={(text) => setSearch(text)}
            />
        </View>
    )
}

export default Search;