import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { Platform, View } from 'react-native'
import { tabs } from '@/constants/data'
import { Image } from 'expo-image'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

type TabIconProps = {
	focused: boolean
	icon: any
}

const ACTIVE_COLOR = 'rgba(175, 253, 126, 1)'

const TabIcon = ({ focused, icon }: TabIconProps) => {
	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: withTiming(focused ? 1.15 : 1, { duration: 200 }) }],
		opacity: withTiming(focused ? 1 : 0.5, { duration: 200 })
	}))

	return (
		<View className='items-center justify-center'>
			<Animated.View style={animatedStyle} className='rounded-full p-2'>
				<Image
					source={icon}
					style={{
						width: 24,
						height: 24,
						tintColor: focused ? ACTIVE_COLOR : undefined
					}}
					contentFit='contain'
				/>
			</Animated.View>
		</View>
	)
}
const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: ACTIVE_COLOR,
				tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
				tabBarStyle: {
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 100,
					backgroundColor:
						Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
					borderTopWidth: 0,
					elevation: 0
				},
				tabBarBackground: () =>
					Platform.OS === 'android' ? (
						<View
							style={{ flex: 1, backgroundColor: 'rgba(60, 60,67, 0.7)' }}
						/>
					) : (
						<BlurView intensity={60} tint='dark' style={{ flex: 1 }} />
					)
			}}
		>
			{tabs.map(tab => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: tab.title,
						tabBarIcon: ({ focused }) => (
							<TabIcon focused={focused} icon={tab.icon} />
						)
					}}
				/>
			))}
			<Tabs.Screen name='training' options={{ href: null }} />
		</Tabs>
	)
}

export default TabLayout
