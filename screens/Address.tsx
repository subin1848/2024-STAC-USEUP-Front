// AddressScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DeliveryAddress from '../components/DeliveryAddress';

const AddressScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('마이페이지');
    }

    return (
        <View style={styles.cardContainer}>
            <DeliveryAddress/>
            <View style={styles.addBtnContainer}>
                <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addressBtnContainer} onPress={handlePress}>
                    <LinearGradient
                        colors={['#36B7FF', '#5883FF']}
                        style={styles.addressBtn}
                    >
                        <Text style = {styles.addressBtnText}>주소 변경 완료</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
    },
    subContainer: {
        flexDirection: 'column',
    },
    btnContainer: {
        flexDirection: 'row',
    },
    addBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSection: {
        backgroundColor: 'fff',
        borderRadius: 4,
        borderWidth: 1,
        width: 38,
        height: 24,
        borderColor: '#AAD6FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    card: {
        padding: 15,
        borderRadius: 8,
        borderWidth: 1.6,
        borderColor:'#46A6FF',
        backgroundColor: '#F8FCFF',
        elevation: 2,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 25,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        marginBottom : 10,
    },
    cardText: {
        fontSize: 10,
        color: '#ADADAD',
    },
    cardText2: {
        fontSize: 10,
        color: '#000',
        marginBottom: 15,
    },
    btnText: {
        fontSize: 10,
        textAlign: 'center',
        color: '#46A6FF',
    },
    addBtnText: {
        fontSize: 20,
        color: '#fff',
        color: '#46A6FF',
    },
    addressBtnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    addBtn: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#DCF0FF',
    },
    addressBtn: {
        width: 350,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    }
});

export default AddressScreen; // 내보내기 확인
