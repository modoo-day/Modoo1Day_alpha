import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


const Report =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <Text>이 게시물을 신고하는 이유</Text>
            </View>
            <View style={styles.second}>
                <Button
                    title='스팸'
                />
            </View>
            <View style={styles.third}>
                <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
                    <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6'}}>
                        <View>
                            <Text>신고</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <Button
                            title='신고사유'
                        />
                        <Button
                            title='신고사유'
                        />
                        <Button
                            title='신고사유'
                        />
                    </CollapseBody>
                </Collapse> 
            </View>
        </View>
    )
}

export default Report;

const styles = StyleSheet.create({
    first:{

    },
    second:{
        backgroundColor:'pink',
        height:50
    },
    buttonLayout: {
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: '100%',
        borderRadius:0
    },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 10,
    },
    third:{
        // backgroundColor:'pink',
        height:200
    },
    buttonLayout1: {
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: 50,
        borderRadius:0,
        // marginTop:'-3%'
    },
    buttonLayout2: {
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: 50,
        borderRadius:0,
        marginTop:'-4%'
    },

})


