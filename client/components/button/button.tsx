import { Dimensions, StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import { regularStyles } from '@/styles/regular/regular.style'

export default function Button({title, onPress}:{title: string,onPress: () => void}) {
    const {width} = Dimensions.get("window")
  return (
    <TouchableOpacity style={[regularStyles.buttonContainer,{
        width: width - 150, alignItems:"center", flexDirection:"row",justifyContent:"center"}]} onPress={() => onPress()}
    >
      <Text style={{color:"#ffffff",fontSize:20,fontWeight:"700"}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
