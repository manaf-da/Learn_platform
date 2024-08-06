import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const regularStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
        backgroundColor:"#4286f4",
        width:responsiveWidth(88),
        height:responsiveHeight(2.5),
        borderRadius:5,
        marginHorizontal:5,
    },
    dotStyle:{
        backgroundColor:"#4286f4",
        height: responsiveHeight(2.5),
        width:responsiveWidth(2.5),
        borderRadius:5,
        marginHorizontal:5,
    },
    activeDotStyle:{
        backgroundColor:"#4286f4",
        height: responsiveHeight(2.5),
        width:responsiveWidth(2.5),
        borderRadius:5,
        marginHorizontal:5,
    },
})