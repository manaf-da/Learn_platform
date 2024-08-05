import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  firstContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: wp("30%"),
    height: hp("15%"),
  },
  titleWrapper: {
    flexDirection: "row",
  },
  titleTextShape1: {
    position: "absolute",
    left: -28,
    top: -20,
  },
  titleTextShape2: {
    position: "absolute",
    right: -40,
    top: -20,
  },
  titleTextShape3: {
    position: "absolute",
    left:60,
  },
  titleText: {
    fontSize: hp("4%"),
    textAlign: "center",
  },
  descriptionWrapper:{
    marginTop:25
  },
  descriptionText:{
    textAlign: "center",
    color:"#575757",
    fontSize: hp("2%")
  },
  buttonWrapper:{
    backgroundColor: "#3f938C",
    width: wp("50%"),
    height: hp("6%"),
    paddingVertical:18,
    marginTop: 40,
    borderRadius: 4,
  },
  buttonText:{
    color: "white",
    textAlign: "center",
    fontSize: hp("2%")
  }
});
