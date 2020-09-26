import React from 'react';
import {useState} from 'react';
import { ImageBackground, View,StyleSheet } from 'react-native';
import Weather from './Weather';
import { StatusBar } from 'expo-status-bar';
import { useLinkProps } from '@react-navigation/native';


export default function WeatherScreen({route}) { 
   
     
    return (
        
        <View>
            <Weather zipCode={route.params.zipCode} />
            
            <StatusBar barstyle="dark-content" backgroundColor="#00aaff" style="auto" />
        </View>
        
        
    );
}
const styles = StyleSheet.create({
    textContainer: {
        borderStyle: "dotted",
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 3,
        width: '100%',
        height: 100,
        alignItems: "center",
        
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        alignItems: "center",
        padding: 10



    },
    textdetail: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        flex: 1,
        alignItems: "center"



    },
    cover: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        opacity: 0.5,


    },
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    
});
