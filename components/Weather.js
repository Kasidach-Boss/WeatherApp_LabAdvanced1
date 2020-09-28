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
        pressure: 0,
        humidity:0,
        speed:0,
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
                        pressure: json.main.pressure,
                        humidity: json.main.humidity,
                        speed: json.wind.speed,
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    const BG = () => {
        if(props.zipCode === '90110'){
            return(
                <ImageBackground source={require('../Hatyai.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                    <Text style={styles.medium}>Hatyai {props.zipCode} Thailand</Text>
                    <Image source={{uri: "http://openweathermap.org/img/wn/"+forecastInfo.icon+"@2x.png"}}
                    style={{width: 250, height: 250}} />
                    <Forecast {...forecastInfo} />  
                </View>
                </ImageBackground>
            )
        }
        if(props.zipCode === '92000'){
            return(
                <ImageBackground source={require('../Trang.jpg')} style={styles.backdrop}>
                    <View style={styles.cover}>
                    <Text style={styles.medium}>Trang {props.zipCode} Thailand</Text>
                    <Image source={{uri: "http://openweathermap.org/img/wn/"+forecastInfo.icon+"@2x.png"}}
                    style={{width: 250, height: 250}} />
                    <Forecast {...forecastInfo} />  
                </View>
                </ImageBackground>
            )
        }
        if(props.zipCode === '50000'){
            return(
                <ImageBackground source={require('../ChiangMai.jpg')} style={styles.backdrop}>
                    <View style={styles.cover}>
                    <Text style={styles.medium}>Chiangmai {props.zipCode} Thailand</Text>
                    <Image source={{uri: "http://openweathermap.org/img/wn/"+forecastInfo.icon+"@2x.png"}}
                    style={{width: 250, height: 250}} />
                    <Forecast {...forecastInfo} />  
                </View>
                </ImageBackground>
            )
        }
        if(props.zipCode === '40000'){
            return(
                <ImageBackground source={require('../Khonkaen.jpg')} style={styles.backdrop}>
                    <View style={styles.cover}>
                    <Text style={styles.medium}>Khonkaen {props.zipCode} Thailand</Text>
                    <Image source={{uri: "http://openweathermap.org/img/wn/"+forecastInfo.icon+"@2x.png"}}
                    style={{width: 250, height: 250}} />
                    <Forecast {...forecastInfo} />  
                </View>
                </ImageBackground>
            )
        }
        if(props.zipCode === '20000'){
            return(
                <ImageBackground source={require('../Chonburi.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                    <Text style={styles.medium}>Chonburi {props.zipCode} Thailand</Text>
                    <Image source={{uri: "http://openweathermap.org/img/wn/"+forecastInfo.icon+"@2x.png"}}
                    style={{width: 250, height: 250}} />
                    <Forecast {...forecastInfo} />  
                </View>
                </ImageBackground>
            )
        }
       else{
        return(
            <ImageBackground source={require('../View.jpg')} style={styles.backdrop}>
            <View style={styles.cover}>
                <Text style={styles.medium}>Chonburi {props.zipCode} Thailand</Text>
                <Image source={{uri: "http://openweathermap.org/img/wn/"+forecastInfo.icon+"@2x.png"}}
                style={{width: 250, height: 250}} />
                <Forecast {...forecastInfo} />  
            </View>
            </ImageBackground>
        )

       }
    }
        
    return (
        <View>
                <BG/>
                
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
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight:'bold',
    }
});
