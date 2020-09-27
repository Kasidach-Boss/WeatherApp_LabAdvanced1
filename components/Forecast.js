import React from 'react';
import { View, Text,SafeAreaView, ScrollView,  StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';


export default function Forecast(props) {
    
    return (   
        <View >
            <View style={styles.center}>
                <Text style={styles.big}>{props.main}</Text>
                <Text style={styles.medium}>{props.description}</Text>
                <Text style={styles.big}>{props.temp}°C</Text>
               
            </View>
            <View style={[styles.infoContent,{marginTop:10}]}>
                <Text style={[styles.Info,{textAlign:'center'},{margin:10},{fontSize: 20}]}>More Information</Text>
                <Text style={styles.Info}>Pressure: {props.pressure}hPa</Text>        
                <Text style={styles.Info}>Humidity: {props.humidity}%</Text>
                <Text style={styles.Info}>Wind-Speed: {props.speed}m/s W</Text>
            </View>    
        </View>     

        
    )
}
const styles = StyleSheet.create({
    center: {        
        justifyContent: 'center',
        alignItems: 'center',
    },
    big: {
        alignItems:'center',
        fontSize: 35,
        color: 'black',
        fontWeight: "bold",
        
        justifyContent: 'center',
    },
    medium: {
        marginTop: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        justifyContent: 'center',
    },
    Info: {
        fontSize: 14,
        color: 'black',
        fontWeight: "bold",
        justifyContent: 'flex-start',
        marginLeft:10, 
    },
    infoContent:{
        backgroundColor:'pink',
        borderRadius: 20,
        width: 350,
        height: 130,
        
    },
})
