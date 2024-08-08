import { View, Text, Image } from "react-native";
import { useFonts, Asap_700Bold } from "@expo-google-fonts/asap";
import { onboardingSwipeData } from "./../../constants/contants";
import {
  MerriweatherSans_400Regular,
  MerriweatherSans_600SemiBold,
  MerriweatherSans_700Bold,
} from "@expo-google-fonts/merriweather-sans";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { router } from "expo-router";
import { regularStyles } from "@/styles/regular/regular.style";
import { styles } from "@/styles/onboarding/onboardingStyle";

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Asap_700Bold,
    MerriweatherSans_400Regular,
    MerriweatherSans_600SemiBold,
    MerriweatherSans_700Bold,
  });

 if(!fontsLoaded) {
  return <View><Text>Loading Fonts...</Text></View>
 }

 if(fontError){
  console.log(`Error loading fonts: ${fontError.message}`)
  return <View><Text>`Error loading fonts: ${fontError.message}`</Text></View>
 }

  const renderItem = ({ item }: { item: onboardingSwipeDataType }) => {
    return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9", "#E8EEF9"]}
      style={{ flex: 1, paddingHorizontal:16 }}
    >
      <View style={{marginTop:80}}>
        <Image source={item.image} style={{alignSelf:'center',marginBottom:30}}/>
        <Text style={[regularStyles.title, { fontFamily: "Asap_700Bold" }]}>
          {item.title}
        </Text>
        <Text style={[regularStyles.description, {fontFamily:"MerriweatherSans_400Regular"}]}>
{item.description}
        </Text>
        <Text style={[regularStyles.description, {fontFamily:"MerriweatherSans_400Regular"}]}>
{item.sortDescription}
        </Text>
        <Text style={[regularStyles.description, {fontFamily:"MerriweatherSans_400Regular"}]}>
{item.sortDescription2}
        </Text>
      </View>
    </LinearGradient>
    )
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwipeData}
      onDone={() => {
        router.push("/login");
      }}
      onSkip={() => {
        router.push("/login");
      }}
      renderNextButton={() => {
        return (
        <View style={styles.welcomeButton}>
          <Text
            style={[
              styles.buttonText,
              { fontFamily: "MerriweatherSans_600SemiBold" },
            ]}
          >
            Next
          </Text>
        </View>
        )
      }}
      renderDoneButton={() => {
        return (
        <View style={styles.welcomeButton}>
          <Text
            style={[
              styles.buttonText,
              { fontFamily: "MerriweatherSans_600SemiBold" },
            ]}
          >
            Done
          </Text>
        </View>
        )
      }
    
  }
      showSkipButton={false}
      dotStyle={regularStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={regularStyles.activeDotStyle}
    />
  );
}


