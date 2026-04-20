import { useColorScheme } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

export const NotificationBell = () => {
	const colorScheme = useColorScheme()
	const color = colorScheme === 'dark' ? 'white' : '#1A1B1E'

	return (
		<Link href='/notification'>
			<Ionicons name='notifications-outline' size={24} color={color} />
		</Link>
	)
}
