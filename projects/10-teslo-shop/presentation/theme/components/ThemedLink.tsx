import { Link, LinkProps } from 'expo-router'
import { useThemeColor } from '../hooks/useThemeColor'

const ThemedLink = ({ style, ...rest }: LinkProps) => {
  const primaryColor = useThemeColor({}, 'primary')

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}
    />
  )
}

export default ThemedLink
