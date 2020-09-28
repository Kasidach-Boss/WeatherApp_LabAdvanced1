import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity ,Alert,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';





const availableZipItems = [
    { place: 'Hatyai', code: '90110'  },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    
]

const _keyExtractor = item => item.code

const ZipItem = ({ place, code, navigation}) => (
    
    
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>

        <View >
            <View style={styles.textContainer}>
            
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
            
             <StatusBar barstyle="dark-content" backgroundColor="#00aaff" style="auto" />
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.cover}>
                
                    <FlatList
                        data={availableZipItems}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}

                    />
                </View>

                
            </ImageBackground>
            

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
        padding: 5



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
