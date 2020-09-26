import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';


export default function Forecast(props) {
    
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            
            <Text style={styles.medium}>{props.description}</Text>
            <View style={{marginTop: 20}}>                
                <Text style={styles.big}>{props.temp}°C</Text>            
            </View>    
            
        </View>
    );
}
const styles = StyleSheet.create({
    center: {        
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    big: {
        marginTop: 20,
        fontSize: 30,
        color: 'black',
        fontWeight: "bold"
    },
    medium: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: "bold"
    }
})
/*

*/