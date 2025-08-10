import React, { useState } from 'react'
import { RefreshControl, ScrollView } from 'react-native'

import ThemedText from '@/presentation/components/shared/themed-text'
import ThemedView from '@/presentation/components/shared/themed-view'
import { useThemeColor } from '@/presentation/hooks/use-theme-color'

export default function PullToRefreshScreen() {
  const primaryColor = useThemeColor({}, 'primary')
  const backgroundColor = useThemeColor(
    {
      dark: 'black',
      light: 'white',
    },
    'background'
  )

  const [isRefreshing, setIsRefreshing] = useState(false)

  const onRefresh = async () => {
    setIsRefreshing(true)

    setTimeout(() => {
      setIsRefreshing(false)
    }, 3000)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  )
}
