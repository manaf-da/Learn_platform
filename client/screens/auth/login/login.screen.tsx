import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
import { router } from "expo-router";

export default function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [required, setRequired] = useState("");
  const [error, setError] = useState({
    password: "",
  });

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError((prev) => ({
        ...prev,
        password: "Write password with special character",
      }));
      setUserInfo((prev) => ({ ...prev, password: "" }));
    } else if (!passwordOneNumber.test(password)) {
      setError((prev) => ({
        ...prev,
        password: "Write password with at least One Number",
      }));
      setUserInfo((prev) => ({ ...prev, password: "" }));
    } else if (!passwordSixValue.test(password)) {
      setError((prev) => ({
        ...prev,
        password: "Write password with at least  6 characters",
      }));
      setUserInfo((prev) => ({ ...prev, password: "" }));
    } else {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
      setUserInfo((prev) => ({ ...prev, password: value }));
    }
  };

  const handleSignIn = () => {};

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
            <TextInput
              style={[styles.input, { paddingLeft: 40 }]}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="hmm@gmail.com "
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, email: value })
              }
            />
            <Fontisto
              style={styles.icon1}
              name="email"
              size={20}
              color={"A1A1A1"}
            />
            {required && (
              <View style={styles.errorContainer}>
                <Entypo name="cross" size={18} color={"red"} />
              </View>
            )}
            <View style={{ marginTop: 15 }}>
              <TextInput
                style={[styles.input, { paddingLeft: 40 }]}
                keyboardType="default"
                secureTextEntry={!isPasswordVisible}
                defaultValue=""
                placeholder="********"
                onChangeText={handlePasswordValidation}
              />
              <TouchableOpacity
                style={styles.visibleIcon}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={26}
                    color={"#A1A1A1"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={26} color={"#A1A1A1"} />
                )}
              </TouchableOpacity>
              <SimpleLineIcons
                style={styles.icon2}
                name="lock"
                size={20}
                color={"#A1A1A1"}
              />
            </View>
            {error.password ? (
              <View style={[styles.errorContainer, { top: 3 }]}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={styles.errorText}>{error.password}</Text>
              </View>
            ) : null}
          </View>
          <TouchableOpacity onPress={() => router.push("forgot-password")}>
            <Text
              style={[
                styles.forgotPassword,
                { fontFamily: "MerriweatherSans_600SemiBold" },
              ]}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={regularStyles.buttonContainer}
            onPress={handleSignIn}
          >
            {buttonSpinner ? (
              <ActivityIndicator size="small" color={"white"} />
            ) : (
              <Text style={styles.btnSpinner}>
                Sign In
              </Text>
            )}
          </TouchableOpacity>
          <View style={styles.signUpRedirect}>
            <Text style={{fontSize:18, fontFamily:"Asap_600SemiBold"}}>
              Dont have have an account ? 
            </Text>
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Asap_600SemiBold",
                  color: "#2467EC",
                  marginLeft:5,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>

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
    height: 50,
    marginHorizontal: 35,
    fontSize: 18,
    backgroundColor: "white",
    color: "#000",
    fontFamily: "MerriweatherSans_400Regular",
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
  visibleIcon: {
    position: "absolute",
    right: 44,
    top: 10,
  },
  icon1: {
    position: "absolute",
    left: 36,
    top: 16,
    paddingLeft: 10,
  },
  icon2: {
    position: "absolute",
    left: 36,
    top: 16,
    paddingLeft: 10,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 35,
  },
  errorText: {
    color: "red",
    fontSize: 11,
    marginLeft: 5,
    fontWeight: "semibold",
  },
  forgotPassword: {
    marginHorizontal: 16,
    textAlign: "right",
    fontSize: 16,
    marginTop: -20,
  },
  btnSpinner: {
    color: "white",
    fontSize: 18,
    overflow: "hidden",    fontFamily: "Asap_700Bold",
    textAlign: "center",
  },
  signUpRedirect: {
    flexDirection:"row",
    marginHorizontal:16,
    justifyContent: "center",
    marginBottom:20,
    marginTop: 10,
    
  }
});
