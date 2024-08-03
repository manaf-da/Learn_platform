import { View, Text, Image } from "react-native";
import React from "react";
import { useFonts, Asap_700Bold } from "@expo-google-fonts/asap";
import {
  MerriweatherSans_400Regular,
  MerriweatherSans_700Bold,
} from "@expo-google-fonts/merriweather-sans";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboardingStyle";
export default function OnBoardingScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Asap_700Bold,
    MerriweatherSans_400Regular,
    MerriweatherSans_700Bold,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image source={require("@/assets/logo.png")} style={styles.logo} />
          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.titleTextShape1}
            source={require("@/assets/onboarding/shape_3.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Asap_700Bold" }]}>
            Learning Platform
          </Text>
          <Image style={styles.titleTextShape2} source={require('@/assets/onboarding/shape_2.png')} />
        </View>
        <View>
          <Image style={styles.titleTextShape3} source={require('@/assets/onboarding/shape_6.png')}/>

        </View>
      </View>
    </LinearGradient>
  );
}
