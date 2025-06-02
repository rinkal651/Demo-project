import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouteProp, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthContext, RootStackParamList } from '../../App'

type UserData = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const User = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState<UserData[]>();
    const { isLoggedIn } = useContext(AuthContext);

    const params = useRoute<RouteProp<RootStackParamList, 'User'>>()
    useEffect(() => {
        console.log(`Rinkal params ${isLoggedIn}`)
        setUserData()
    }, [])

    async function setUserData() {
        setData(await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => { console.log(response); return response.json() }))
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>User : {isLoggedIn}</Text>

            <FlatList data={data} renderItem={({ item }) => {
                return (<Text style={{ fontSize: 20, }}>{item.title}</Text>)
            }}
                ItemSeparatorComponent={() => { return <View style={{ borderBottomWidth: 1 }}></View>; }} />
        </View>
    )
}

export default User

const styles = StyleSheet.create({})