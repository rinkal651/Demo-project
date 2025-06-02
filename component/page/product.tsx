import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/action'


type productProps = {
  item: any
}

const Product = (props: productProps): React.JSX.Element => {
  var item = props.item
  const [isAdded, setIsAdded] = useState<boolean>(false)

  const reducer = useSelector((state: any) => state.reducer)

  useEffect(() => {
    let result = reducer.filter((element: any) => element.name == item.name)
    if (result.length > 0) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }
  }, [reducer])

  const dispatch = useDispatch();
  function handleAddToCart(item: any): void {
    dispatch(addToCart(item))
  }

  function handleRemoveFromCart(item: any): void {
    dispatch(removeFromCart(item))
  }

  return (
    <View style={{ padding: 20, gap: 15, alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 1 }}>
      <Text style={{ color: 'red', fontSize: 17 }}>Name: {item.name}</Text>
      <Text >Price: {item.price}</Text>
      <Text>Color: {item.color}</Text>
      {/* set it to required width only */}

      {isAdded ?
        <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={{ backgroundColor: 'orange', alignItems: 'center', borderRadius: 10, paddingHorizontal: 30, flex: 0, width: 200, paddingVertical: 16 }}>
          <Text style={{ fontSize: 17 }}>Remove from cart</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={() => handleAddToCart(item)} style={{ backgroundColor: 'orange', alignItems: 'center', borderRadius: 10, paddingHorizontal: 30, flex: 0, width: 200, paddingVertical: 16 }}>
          <Text style={{ fontSize: 17 }}>Add to cart</Text>
        </TouchableOpacity>}
    </View>
  );
}

export default Product