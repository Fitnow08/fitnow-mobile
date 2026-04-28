import '@/glocal.css'
import { View, Image } from 'react-native'
import { useRef } from 'react'
import { ICarouselInstance } from 'react-native-reanimated-carousel'

import { SafeAreaView as RNSaveAreaView } from 'react-native-safe-area-context'
import { styled } from 'nativewind'

import images from '@/shared/constants/images'
import { MyText } from '@/shared/ui/Text'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { NotificationBell } from '@/shared/ui/NotificationBell'
import { SearchInput } from '@/shared/ui/SearchInput'
import {
	TrainingCarousel,
	NextSlide,
	TrainingItem
} from '@/shared/ui/TrainingCarousel'
import { TrainingCategories } from '@/shared/ui/TrainingCategories'
export const ITEMSSlider: TrainingItem = {
	id: '1',
	title: 'Кардио',
	categories: [
		{
			icon: require('@/assets/images/categories-train/weight.png'),
			title: 'fast'
		},
		{
			icon: require('@/assets/images/categories-train/Lightning.png'),
			title: 'speed'
		}
	],
	image: require('@/assets/images/train.png')
}
const SafeAreaView = styled(RNSaveAreaView)
export default function App() {
	const carouselRef = useRef<ICarouselInstance>(null)

	return (
		<SafeAreaView className='flex-1 bg-white dark:bg-bgdark'>
			<View className='home-header'>
				<View className='flex-row justify-between items-center'>
					<View className='flex-row items-center gap-2'>
						<Image source={images.avatar} className='home-avatar' />
						<MyText className='font-manrope-medium'>Привет Мария</MyText>
					</View>
					<View className='flex-row items-center gap-2'>
						<ThemeToggle />
						<NotificationBell />
					</View>
				</View>
				<SearchInput placeholder='Поиск тренировок...' />
			</View>
			<TrainingCategories categories={ITEMSSlider.categories} />
			<View className=''>
				<View className='flex-row justify-between items-center ml-4 mb-4 mr-4'>
					<MyText className='text-2xl'>Программы для вас</MyText>
					<NextSlide onPress={() => carouselRef.current?.next()} />
				</View>
				<TrainingCarousel carouselRef={carouselRef} />
			</View>
		</SafeAreaView>
	)
}
