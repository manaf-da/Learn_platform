import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {Entypo,Fontisto,Ionicons,SimpleLineIcons} from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Asap_700Bold,Asap_600SemiBold } from "@expo-google-fonts/asap";
import {
    MerriweatherSans_400Regular,
    MerriweatherSans_500Medium,
    MerriweatherSans_600SemiBold,
    MerriweatherSans_700Bold,
  } from "@expo-google-fonts/merriweather-sans";
import { useState } from 'react';

export default function LoginScreen() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [userInfo, setUserInfo] = useState({
        emailOrName: '',
        password:'',
    })


  return (
    <LinearGradient colors={["#E5ECF9","#F6F7F9"]}  style={{flex:1, paddingTop:20}}>
        <ScrollView>
            <Image style={styles.signImage} source={require('@/assets/sign-in/sign_in.png')}/>
            <Text></Text>
        </ScrollView>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    signImage: {
        width: '60%',
        height: 250,
        alignSelf: 'center',
        marginTop: 50,  
    }
})