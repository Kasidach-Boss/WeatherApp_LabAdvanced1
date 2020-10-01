import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './components/ZipCodeScreen';
import WeatherScreen from './components/WeatherScreen';
import { View ,Text ,Image,ScrollView,StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Home(){
  return (
     
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ZipCodeScreen}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#00aaff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
          
          <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
            title: 'Weather',
            headerStyle: {
              backgroundColor: '#00aaff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        </Stack.Navigator> 
      
    );  

  }
  function Aboutme (){
    
    return(
      <View style={{ flex: 1 , alignItems: 'center', backgroundColor:  'lightblue' }}>
       
          <View style={{marginTop:50,backgroundColor:'lightgreen',borderRadius: 20,width: 200,height: 50,alignItems:'center'}} >
          <Text style={{fontWeight:'bold',fontSize:30,alignItems:'center'}}>About me</Text>
          </View>
           <ScrollView style={styles.center}>
          <Image source ={require('./Boss.jpg')} style={{width: 300, height: 300,alignItems:'center',marginTop:20}}/>
          <View style={{marginTop:20,backgroundColor:'pink',borderRadius: 20,width: '100%',height: 140,}}>
            <Text style={{fontSize: 14,color: 'black',fontWeight: "bold",justifyContent: 'flex-start',marginLeft:10,marginTop:20 }}>1.My name is Kasidach Sangthong.</Text>
            <Text style={{fontSize: 14,color: 'black',fontWeight: "bold",justifyContent: 'flex-start',marginLeft:10 }}>2.My student ID is 6135512045.</Text>
            <Text style={{fontSize: 14,color: 'black',fontWeight: "bold",justifyContent: 'flex-start',marginLeft:10 }}>3.I study at Computer Engineering {"\n"}Prince of Songkla University ,Phuket Campus.</Text>
            <Text style={{fontSize: 14,color: 'black',fontWeight: "bold",justifyContent: 'flex-start',marginLeft:10 }}>4.Contact: s6135512045@phuket.psu.ac.th</Text>
          </View>
        </ScrollView>
        
    </View>
    )
    
  }
  function MyTabs() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About me"
        component={Aboutme}
        options={{
          tabBarLabel: 'About me',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
    
  }
  export default function App() {
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
       
}

const styles = StyleSheet.create({
  center:{
    alignSelf:'center'
  }
})

