import { products } from '@/presentation/store/products.store'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function ProductScreen() {
  const { id } = useLocalSearchParams()
  const navigation = useNavigation()

  const product = products.find((item) => item.id.toString() === id)

  useEffect(() => {
    navigation.setOptions({
      tittle: product?.title || 'Producto',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  if (!product) {
    return (
      <Redirect href={'/'} />
    )
  }

  return (
    <View className='px-5 mt-2'>
      <Text className='font-work-black text-2xl'>
        {product.title}
      </Text>

      <Text className=''>
        {product.description}
      </Text>

      <Text className='font-work-black'>
        {product.price}
      </Text>
    </View>
  )
}
