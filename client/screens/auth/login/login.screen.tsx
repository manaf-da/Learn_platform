import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Asap_700Bold,
  Asap_600SemiBold,
} from "@expo-google-fonts/asap";
import {
  MerriweatherSans_400Regular,
  MerriweatherSans_500Medium,
  MerriweatherSans_600SemiBold,
  MerriweatherSans_700Bold,
} from "@expo-google-fonts/merriweather-sans";
import { useState } from "react";
import { regularStyles } from "@/styles/regular/regular.style";


export default function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState("");
  const handlePasswordValidation = (value:string) =>{
    const password = value
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/
    const passwordOneNumber = /(?=.*[0-9])/
    const passwordSixValue = /(?=.{6,})/

  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 20 }}
    >
      <ScrollView>
        <Image
          style={styles.signImage}
          source={require("@/assets/sign-in/sign_in.png")}
        />
        <Text style={styles.loginText}> Login to your Account</Text>
        <View style={styles.inputContainer}>
          <View>
            <TextInput style={[styles.input,{paddingLeft:40}]}
            keyboardType="email-address" value={userInfo.email}
            placeholder="hmm@gmail.com " onChangeText={(value) => setUserInfo({...userInfo,email:value})}/>
            <Fontisto style={{position: "absolute", left:26, top:12.8 , paddingLeft:12}}
            name="email" size={20} color={"A1A1A1"} />
            {required && (
                <View style={regularStyles.errorContainer}>
                    <Entypo name="cross" size={18} color={"red"}/>

                    </View>

            )}
            <View>
                <TextInput style={regularStyles.input} keyboardType="default" secureTextEntry={!isPasswordVisible} defaultValue=""
                placeholder="********" onChangeText={handlePasswordValidation} />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signImage: {
    width: "60%",
    height: 250,
    alignSelf: "center",
    marginTop: 50,
  },
  loginText: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Asap_700Bold",
    marginTop: 30,
  },
  inputContainer: {
    marginHorizontal: 16,
    marginTop: 30,
    rowGap: 30,
  },
  input: {
    height: 40,
    marginHorizontal: 35,
    paddingLeft: 40,
    fontSize: 18,
    backgroundColor: "white",
    color: "#000",
    fontFamily: "MerriweatherSans_400Regular",
  },
});
