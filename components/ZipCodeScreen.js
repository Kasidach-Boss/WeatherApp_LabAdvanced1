import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useState } from "react";
const availableZipItems = [
    { place: 'Hatyai', code: '90110' , pic:'../Hatyai.jpg' },
    { place: 'Trang', code: '92000' ,pic:'../Hatyai.jpg'},
    { place: 'Chiangmai', code: '50000' ,pic:'../Hatyai.jpg'},
    { place: 'Khonkaen', code: '40000' ,pic:'../Hatyai.jpg'},
    { place: 'Chonburi', code: '20000',pic:'../Hatyai.jpg' },
    { place: 'Phatthalung', code: '93000',pic:'../Hatyai.jpg' }
]

const _keyExtractor = item => item.code

const ZipItem = ({ place, code, navigation, pic}) => (
    

    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>

        <View >
            {/* <StatusBar barstyle="dark-content" backgroundColor="#00aaff" style="auto" /> */}

            <View style={styles.text}>
                <Text style={styles.text}>Place:{place}</Text>
                <Text style={styles.textdetail}>Zipcode:{code}</Text>
               
            </View>

        </View>
    </TouchableHighlight>

)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View >
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                    <FlatList
                        data={availableZipItems}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}

                    /></View>
            </ImageBackground>
            

        </View>
    );

}

const styles = StyleSheet.create({
    textContainer: {
        borderStyle: "dotted",
        borderWidth: 1,
        borderRadius: 3,
        width: 300,
        height: 100
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "lightblue",
        alignItems: "center",
        padding: 10



    },
    textdetail: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        flex: 1,
        alignItems: "center"



    },
    cover: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        opacity: 0.4,


    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    
});
