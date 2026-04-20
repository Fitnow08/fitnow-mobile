import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		'Manrope-Bold': require('@/assets/fonts/manrope/Manrope-Bold.otf'),
		'Manrope-Medium': require('@/assets/fonts/manrope/Manrope-Medium.otf'),
		'Manrope-Regular': require('@/assets/fonts/manrope/Manrope-Regular.otf'),
		'SFPRO-Bold': require('@/assets/fonts/SF_PRO/SFPRO_BOLD.otf'),
		'SFPRO-Medium': require('@/assets/fonts/SF_PRO/SFPRO_MEDIUM.otf'),
		'SFPRO-Regular': require('@/assets/fonts/SF_PRO/SFPRO_REGULAR.otf'),
		'SFPRO-SemiBoldItalic': require('@/assets/fonts/SF_PRO/SFPRO_SEMIBOLDITALIC.otf')
	})

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync()
		}
	}, [fontsLoaded])
	if (!fontsLoaded) {
		return null
	}
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Stack screenOptions={{ headerShown: false }} />
		</GestureHandlerRootView>
	)
}
