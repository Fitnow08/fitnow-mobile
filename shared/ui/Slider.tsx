import { View, LayoutChangeEvent } from 'react-native'
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	runOnJS,
} from 'react-native-reanimated'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useColorScheme } from 'react-native'

interface SliderProps {
	min?: number
	max?: number
	value?: number
	onChange?: (value: number) => void
}

export const Slider = ({ min = 0, max = 100, value = 0, onChange }: SliderProps) => {
	const colorScheme = useColorScheme()
	const isDark = colorScheme === 'dark'

	const width = useSharedValue(0)
	const position = useSharedValue((value - min) / (max - min))
	const startPosition = useSharedValue(position.value)

	const clamp = (val: number, lo: number, hi: number) => Math.min(Math.max(val, lo), hi)

	const notify = (ratio: number) => {
		onChange?.(Math.round(min + ratio * (max - min)))
	}

	const gesture = Gesture.Pan()
		.onBegin(() => {
			startPosition.value = position.value
		})
		.onUpdate((e) => {
			position.value = clamp(startPosition.value + e.translationX / width.value, 0, 1)
			runOnJS(notify)(position.value)
		})

	const trackFill = useAnimatedStyle(() => ({
		width: `${position.value * 100}%`,
	}))

	const thumb = useAnimatedStyle(() => ({
		transform: [{ translateX: position.value * width.value - 10 }],
	}))

	const onLayout = (e: LayoutChangeEvent) => {
		width.value = e.nativeEvent.layout.width
	}

	return (
		<View className='justify-center h-10' onLayout={onLayout}>
			<View className='h-1 rounded-full bg-gray-300 dark:bg-gray-600 overflow-visible'>
				<Animated.View
					className='h-full rounded-full bg-dark dark:bg-white'
					style={trackFill}
				/>
			</View>

			<GestureDetector gesture={gesture}>
				<Animated.View
					className='absolute size-5 rounded-full bg-dark dark:bg-white'
					style={[{ top: '50%', marginTop: -10 }, thumb]}
				/>
			</GestureDetector>
		</View>
	)
}
