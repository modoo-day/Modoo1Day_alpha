import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Button from 'apsl-react-native-button';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';


const ReportPage =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <Text style={styles.firstText}>이 게시물을 신고하는 이유</Text>
            </View>
            <View style={styles.second}>
                <Button
                    style={styles.buttonLayout} 
                    textStyle={styles.buttonText}
                    disabledStyle={{backgroundColor:'white'}}
                    isDisabled={false}
                    isLoading={false}
                    onPress={()=>alert('신고접수')}
                >
                스팸
                </Button>
            </View>
            <View style={styles.third}>
                <Collapse style={styles.collapse}>
                    <CollapseHeader style={styles.collapseHeaderStyle}>
                        <View>
                            <Text style={styles.collapseHeaderText}>부적절합니다 ▼</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View 
                            //style={{backgroundColor:'pink', height:300}}
                        >
                            <Button
                                style={styles.buttonLayout1} 
                                textStyle={styles.buttonText}
                                disabledStyle={{backgroundColor:'grey'}}
                                isDisabled={false}
                                isLoading={false}
                                onPress={()=>alert('신고접수')}
                                >
                            신고 사유 1
                            </Button>
                            <Button
                                style={styles.buttonLayout2} 
                                textStyle={styles.buttonText}
                                disabledStyle={{backgroundColor:'grey'}}
                                isDisabled={false}
                                isLoading={false}
                                onPress={()=>alert('신고접수')}
                                >
                            신고 사유 2
                            </Button>
                            <Button
                                style={styles.buttonLayout2} 
                                textStyle={styles.buttonText}
                                disabledStyle={{backgroundColor:'grey'}}
                                isDisabled={false}
                                isLoading={false}
                                onPress={()=>alert('신고접수')}
                                >
                            신고 사유 3
                            </Button>
                        </View>
                    </CollapseBody>
                </Collapse> 
            </View>
        </View>
    )
}

export default ReportPage;

const styles = StyleSheet.create({
    first:{
        height:50,
        backgroundColor:'lightyellow',
        justifyContent:'center',
        alignItems:'center'
    },
    firstText:{
        fontFamily:'neodgm',
        fontSize:10
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
    },
    collapse:{
        //backgroundColor:'lightblue',
        height:'75%'
    },
    collapseHeaderStyle:{
        flexDirection:'row',    
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        height:50,
        borderWidth:1
    },
    collapseHeaderText:{
        fontFamily:'neodgm',
        fontSize:10
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


