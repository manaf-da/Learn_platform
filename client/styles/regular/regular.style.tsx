import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth ,responsiveFontSize} from "react-native-responsive-dimensions";

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
        height: responsiveHeight(1.5),
        width:responsiveHeight(1.5),
        borderRadius:responsiveHeight(0.75),
        marginHorizontal:5,
    },
    activeDotStyle:{
        backgroundColor:"#4286f4",
        height: responsiveHeight(1.5),
        width:responsiveHeight(1.5),
        borderRadius:responsiveHeight(0.75),
        marginHorizontal:5,
    },
    title:{
        fontSize: responsiveFontSize(3.5),
        textAlign: "center"
    }
})