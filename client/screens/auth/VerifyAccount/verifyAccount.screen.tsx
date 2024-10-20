import React from 'react'
import {Text,View, StyleSheet, TextInput} from 'react-native'
import { useState,useRef } from 'react'

export default function VerifyAccountScreen() {
    const [code, setCode] = useState(new Array(4).fill(''))

    const inputs = useRef([...Array(4)].map(() => React.createRef()))

    const handleInput = (text:any, index:any) =>{
        const newCode = [...code]
        newCode[index] = text
        setCode(newCode)

        if(text && index < 3){
            inputs.current[index+1].current.focus()
        }

        if(text ==="" && index > 0){
            inputs.current[index-1].current.focus()
        }
    }
  return (
<View style={styles.container}>
    <Text style={styles.headerText}>Verification Code</Text>
    <Text style={styles.subText}>Please enter the verification code sent to your registered email.</Text>
    <View style={styles.inputContainer}>
        {code.map((_, index) => (
            <TextInput
                key={index}
                style={styles.inputBox}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleInput(text, index)} // Use onChangeText instead of onChange
                value={code[index]}
                ref={inputs.current[index]}
                returnKeyType='done'
                autoFocus={index === 0}
            />
        ))}
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:"#ffffff"
    },
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
    },
    subText:{
        fontSize:16,
        color:'#888',
        marginBottom:20,
        textAlign:'center',
    },
    inputContainer:{
        flexDirection:'row',
        marginBottom:20,
    },
    inputBox:{
        width:40,
        height:40,
        borderWidth:1,
        borderColor:'#ccc',
        textAlign:'center',
        marginRight:10,
    }
})
