import { products } from '@/presentation/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

export default function ProductsScreen() {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className='mt-10'>
            <Text className='text-2xl font-work-black'>
              {item.title}
            </Text>

            <Text className=''>
              {item.description}
            </Text>

            <View className='flex flex-row justify-between mt-2'>
              <Text className='font-work-black'>
                {item.price}
              </Text>

              <Link
                href={`/products/${item.id}`}
                className='text-primary'
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}
