import React from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'


const AttendanceParticipants = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <Text>DAY 1</Text>
                <Text>참여자 10명</Text>
            </View>
            <View style={styles.attendanceContainer}>
                <Text style={styles.attendanceText}>출석 8/10</Text>
                <View style={styles.profileListContainer}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')}/>
                        <Text style={styles.id}>아이디</Text>
                    </View>
                </View>
            </View>
            <View>

            </View>
        </ScrollView>
    )
}

export default AttendanceParticipants;

const styles = StyleSheet.create({
    container:{

    },
    top:{

    },
    attendanceContainer:{

    },
    attendanceText:{

    },
    profileListContainer:{

    },
    profileContainer:{

    },
    profileImg:{

    },
    id:{

    },
})