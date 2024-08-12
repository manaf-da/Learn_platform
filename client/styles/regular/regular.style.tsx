import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const regularStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#3f938C",
    width: responsiveWidth(50),
    height: responsiveHeight(4.5),
    borderRadius: 5,
   marginHorizontal:responsiveWidth(22),
   paddingTop:8
   
  },
  dotStyle: {
    backgroundColor: "#C6C7CC",
    height: responsiveHeight(1.5),
    width: responsiveHeight(1.5),
    borderRadius: responsiveHeight(0.75),
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "#3f938C",
    height: responsiveHeight(1.5),
    width: responsiveHeight(1.5),
    borderRadius: responsiveHeight(0.75),
    marginHorizontal: 5,
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    textAlign: "center",
  },
  description: {
    fontSize: responsiveFontSize(2.5),
    color: "#575757",
    textAlign: "center",
  },
  input: {
    height: 40,
    marginHorizontal: 16,
    paddingLeft: 35,
    fontSize: 18,
    backgroundColor: "white",
    color: "#000",
    fontFamily: "MerriweatherSans_400Regular",
  },
  errorContainer: {
    flexDirection:"row",
    alignItems: "center",
    marginHorizontal:16,
    position:"absolute",
    top:60,
  }
});
