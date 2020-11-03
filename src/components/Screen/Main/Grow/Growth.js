import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default Growth = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <View style={styles.topLeft}>
                    <Image style={styles.topImg} source={require('../../../../assets/img/night.png')}/>
                </View>
                <View style={styles.topRight}>
                    {/* 경험치바 */}
                    <View style={styles.buttonContainer}>
                        <Button
                            title='모do 개설'
                        />
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                <View style={styles.listTextContainer}>
                    <Text style={styles.listTitle}>매일 물 마시기</Text>
                    <TouchableOpacity>
                        <Text style={styles.listButton}>인증하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{

    },
    top:{

    },
    topLeft:{

    },
    topImg:{

    },
    topRight:{

    },
    buttonContainer:{

    },
    bottom:{

    },
    listImg:{

    },
    listTextContainer:{

    },
    listTitle:{

    },
    listButton:{

    },
})