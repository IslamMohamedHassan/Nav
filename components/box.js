import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "./Boxstyle";

export default function Box({ colorName, hexCode }) {
  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        { backgroundColor: hexCode },
      ])}
    >
      <Text style={styles.textStyle}>{`${colorName} ${hexCode}`}</Text>
    </View>
  );
}

