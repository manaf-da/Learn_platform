import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function index() {
  return <Redirect href={"/(routes)/onboarding"} />
}

const styles = StyleSheet.create({})