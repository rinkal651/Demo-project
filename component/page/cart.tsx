import { View, Text, StyleSheet, AppState, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type cartProps = {
  name: string
}
const Cart = (props: cartProps) => {
  const route = useNavigation<NativeStackNavigationProp<RootStackParamList, 'User'>>();
  const name = props.name
  return (
    <View>
      <Text style={style.textStyle}>Hello, {name}! Welcome to React Native.</Text>
      <Button title={'Navigate to User'} onPress={() => route.navigate("User", { userId: '2' })}></Button>
    </View>
  )
}


const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: 'black',
    backgroundColor: 'orange',
  }
})
export default Cart