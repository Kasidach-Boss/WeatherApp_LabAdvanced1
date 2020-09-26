import React from 'react';
import { ImageBackground, View } from 'react-native';
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
