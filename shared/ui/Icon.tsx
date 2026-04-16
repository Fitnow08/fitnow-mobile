import { View } from 'react-native'
import { Image } from 'expo-image'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { ACTIVE_COLOR } from '@/constants/data'
type TabIconProps = {
	focused: boolean
	icon: any
}
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
export default TabIcon
