import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp,heightPercentageToDP as hp  } from "react-native-responsive-screen"


export const styles = StyleSheet.create({
    firstContainer:{
        alignItems: 'center',
        marginTop:50,
    },
    logo:{
        width: wp('25%'),
        height: hp('15%'),
        
    },
    titleWrapper:{
        flexDirection: 'row',
    },
    titleTextShape1:{
        position: 'absolute',
        left: -28,
        top: -20

    }
})