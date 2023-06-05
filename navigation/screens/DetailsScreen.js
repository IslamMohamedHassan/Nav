import { View, Text } from 'react-native'
import React from 'react'

const Details = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>details Screen</Text>
        </View>
  )
}

export default Details