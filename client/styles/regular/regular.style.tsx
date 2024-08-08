import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth ,responsiveFontSize} from "react-native-responsive-dimensions";

export const regularStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonContainer:{
        backgroundColor:"#3f938C",
        width:responsiveWidth(88),
        height:responsiveHeight(2.5),
        borderRadius:5,
        marginHorizontal:5,
    },
    dotStyle:{
        backgroundColor:"#C6C7CC",
        height: responsiveHeight(1.5),
        width:responsiveHeight(1.5),
        borderRadius:responsiveHeight(0.75),
        marginHorizontal:5,
    },
    activeDotStyle:{
        backgroundColor:"#3f938C",
        height: responsiveHeight(1.5),
        width:responsiveHeight(1.5),
        borderRadius:responsiveHeight(0.75),
        marginHorizontal:5,
    },
    title:{
        fontSize: responsiveFontSize(3.5),
        textAlign: "center"
    },
    description:{
        fontSize:responsiveFontSize(2.5),
        color:"#575757",
        textAlign: "center",
        

    }

})