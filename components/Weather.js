import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet ,Image} from 'react-native';
import Forecast from './Forecast';


const apiKey = '6cecb9dd2e369d7e9b5d62bc682150d4'
export default function Weather(props) {
    
   
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        icon: '-',
        description: '-',
        temp: 0,
        
    })
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())

                .then((json) => {
                    console.log('json: ', json)
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        icon: json.weather[0].icon,
                       
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <View>
            <ImageBackground source={require('../View.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                    <Text style={styles.medium}>Zip Code:{props.zipCode}</Text>
                     <Image source={{uri: "http://openweathermap.org/img/wn/"+forecastInfo.icon+"@2x.png"}}
                        style={{width: 300, height: 300}} />
                    <Forecast {...forecastInfo} />
                    
                   
                   
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    cover: {
        backgroundColor: 'lightgray',
        width: '100%',
        height:'100%',
        opacity: 0.7,
        alignItems: 'center',
    },
    medium: {
        marginTop: 32,
        fontSize: 20,
        color: 'black',
        fontWeight:'bold',
    }
});
