import {
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
              <View style={regularStyles.errorContainer}>
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
            {error?.password && (
              <View style={[regularStyles.errorContainer, { top: 145 }]}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                  {error.password}
                </Text>
              </View>
            )}
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
    paddingLeft: 40,
    fontSize: 18,
    backgroundColor: "white",
    color: "#000",
    fontFamily: "MerriweatherSans_400Regular",
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
});
