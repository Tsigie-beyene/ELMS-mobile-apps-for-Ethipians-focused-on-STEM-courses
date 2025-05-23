import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function OnboardingScreen() {
    const [index,setIndex]= useState(0)
    const prev = onBoardingSlides[index - 1]
    const next = onBoardingSlides[index + 1]


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    </GestureHandlerRootView>
      
  )
}

