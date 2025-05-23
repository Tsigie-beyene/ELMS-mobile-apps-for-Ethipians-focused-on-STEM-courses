import { StyleSheet, Text, View } from 'react-native'
import React, { JSX } from 'react'
import { useSharedValue } from 'react-native-reanimated';

interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}
export default function Slider({
    index,
    children:current,
    prev,
    next,
    setIndex,

} :SliderProps) {

    const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);
  const activeSide = useSharedValue(Side.NONE);
//   const isTransitionLeft = useSharedValue(false);
//   const isTransitionRight = useSharedValue(false);
//   const left = useVector(MIN_LEDGE, HEIGHT / 2);
//   const right = useVector(MIN_LEDGE, HEIGHT / 2);
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}

const styles = StyleSheet.create({})