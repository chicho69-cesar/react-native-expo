import { StyleSheet } from 'react-native'

export const globalTheme = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
