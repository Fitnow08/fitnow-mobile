import { Appearance, useColorScheme, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const ThemeToggle = () => {
	const colorScheme = useColorScheme()
	const isDark = colorScheme === 'dark'

	return (
		<Pressable onPress={() => Appearance.setColorScheme(isDark ? 'light' : 'dark')}>
			<Ionicons
				name={isDark ? 'sunny-outline' : 'moon-outline'}
				size={24}
				color={isDark ? 'white' : '#1A1B1E'}
			/>
		</Pressable>
	)
}
