/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    ScrollView,
    StatusBar,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cart from './cart';
import Product from './product';

function ProductWarpper(): React.JSX.Element {
   
    const products = [
        {
            name: "Vivo",
            color: "white",
            price: 20000,
        },
        {
            name: "Appo",
            color: "Black",
            price: 30000,
        },
        {
            name: "Realme",
            color: "Blue",
            price: 25000,
        },
        {
            name: "IPhone",
            color: "Green",
            price: 70000,
        },
        {
            name: "Samsang",
            color: "white",
            price: 20000,
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar translucent={true} barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Cart name={"Rinkal"} />
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                    {products.map((product) => (
                        <Product key={product.name} item={product} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default ProductWarpper;
