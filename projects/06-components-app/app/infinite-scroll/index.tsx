import React, { useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

import FadeInImage from '@/presentation/components/images/fade-in-image'
import ThemedView from '@/presentation/components/shared/themed-view'
import { useThemeColor } from '@/presentation/hooks/use-theme-color'

export default function InfiniteScrollScreen() {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])
  const primaryColor = useThemeColor({}, 'primary')

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)

    setTimeout(() => {
      setNumbers([...numbers, ...newArray])
    }, 3000)
  }

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  )
}

interface ListItemProps {
  number: number
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: '100%',
      }}
    />

    // <Image
    //   source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
    //   style={{
    //     height: 400,
    //     width: '100%',
    //   }}
    // />
  )
}
