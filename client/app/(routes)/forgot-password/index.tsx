import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import {
    useFonts,
    Asap_700Bold,
    Asap_600SemiBold,
  } from "@expo-google-fonts/asap";
  import { router } from "expo-router";

  export default function ForgotPassword() {
    let [fontloader,fontError] = useFonts({
        Asap_700Bold,
      Asap_600SemiBold,

      })

    if (!fontloader || fontError) {
      return null;
    }

    return (
      <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={styles.container}>
        <Text style={[styles.headerText, { fontFamily: "Asap_600SemiBold" }]}>
          Reset Email Password
        </Text>
        <TextInput
          style={[styles.input, { fontFamily: " Asap_700Bold" }]}
          placeholder="Username@gmail.com"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { fontFamily: "Asap_600SemiBold" }]}>
            Send
          </Text>
        </TouchableOpacity>
        <View style={styles.loginLink}>
          <Text style={[styles.backText, { fontFamily: "Asap_700Bold" }]}>
            Back To?
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={[styles.loginText, { fontFamily: "Asap_700Bold" }]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    headerText: {
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: "#3f938C",
      width: "50%",
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
    loginLink: {
      flexDirection: "row",
      marginTop: 30,
    },
    loginText: {
      color: "#3876EE",
      marginLeft: 5,
      fontSize: 16,
    },

    backText: { fontSize: 16 },
  });
