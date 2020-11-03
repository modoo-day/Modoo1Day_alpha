import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default Contents = () => {
    
    const navigation = useNavigation();

    return(

        <View>
            <Text>Contents</Text>
            <Button
                title='뒤로 가기'
                onPress={()=>navigation.goBack()}
            ></Button>
        </View>
    )
}