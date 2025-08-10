import type { LatLng } from '@/infrastructure/interfaces/lat-lng'
import * as Location from 'expo-location'

export const getCurrentLocation = async (): Promise<LatLng> => {
  try {
    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    })

    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
    }
  } catch (error) {
    console.error('Error getting user location:', error)
    throw new Error('Error getting users location')
  }
}

export const watchCurrentLocation = (locationCallback: (location: LatLng) => void) => {
  return Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 10,
    },
    ({ coords }) => {
      locationCallback({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    }
  )
}
