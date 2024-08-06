import { View, Text } from 'react-native'
import React from 'react'
import { useFonts, Asap_700Bold } from "@expo-google-fonts/asap";
import { onboardingSwipeData } from './../../constants/contants';
import {MerriweatherSans_400Regular,  MerriweatherSans_700Bold,
} from "@expo-google-fonts/merriweather-sans";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from 'expo-router';

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Asap_700Bold,
    MerriweatherSans_400Regular,
    MerriweatherSans_700Bold,
  });

  if(!fontsLoaded || fontError) {
    return null;
  }

const renderItem = ({item}:{item:onboardingSwipeDataType} ) => {
  <LinearGradient colors={["#E5ECF9","#F6F7F9","#E8EEF9"]} style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
<View>

</View>
  </LinearGradient>
}

  return (
 
    <AppIntroSlider renderItem={renderItem} data={onboardingSwipeData}
    onDone={() => {router.push('/login')}}
    />
  )
}