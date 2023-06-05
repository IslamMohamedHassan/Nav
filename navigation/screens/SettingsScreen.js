import { View, Text } from 'react-native'
import React from 'react'

const Setting = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Setting Screen</Text>
        </View>
  )
}

export default Setting