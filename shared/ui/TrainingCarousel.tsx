import {
	ImageBackground,
	ImageSourcePropType,
	View,
	useWindowDimensions,
	Image,
	TouchableOpacity
} from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { RefObject } from 'react'
import { MyText } from '@/shared/ui/Text'
import { BlurView } from 'expo-blur'
import { ITEMSSlider } from '@/shared/constants/data'
import images from '@/shared/constants/images'
export interface ITrainCategories {
	icon: ImageSourcePropType
	title: string
}
export interface TrainingItem {
	id: string
	title: string
	categories: ITrainCategories[]
	image: ImageSourcePropType
}

const CarouselCard = ({ item }: { item: TrainingItem }) => (
	<ImageBackground
		source={item.image}
		className='rounded-2xl mx-3 overflow-hidden justify-end h-55'
		imageStyle={{ borderRadius: 16 }}
	>
		<BlurView className='p-4 shadow-xl' style={{ backgroundColor: '#1A1B1E' }}>
			<MyText className='text-white font-manrope-bold text-xl'>
				{item.title}
			</MyText>
			<View className='flex-row gap-3 mt-1'>
				{item.categories.map(item => (
					<BlurView
						key={item.title}
						className='flex-row items-center gap-1 p-1  bg-white overflow-hidden'
						style={{ borderRadius: 16 }}
					>
						<Image source={item.icon} />
						<MyText className='text-white opacity-80 font-sfpro-medium text-sm'>
							{item.title}
						</MyText>
					</BlurView>
				))}
			</View>
		</BlurView>
	</ImageBackground>
)

export const TrainingCarousel = ({
	carouselRef
}: {
	carouselRef: RefObject<ICarouselInstance | null>
}) => {
	const { width } = useWindowDimensions()
	const CARD_WIDTH = width * 0.75

	return (
		<Carousel
			ref={carouselRef}
			width={CARD_WIDTH}
			height={220}
			data={ITEMSSlider}
			renderItem={({ item }) => <CarouselCard item={item} />}
			style={{ width }}
			loop={false}
		/>
	)
}

export const NextSlide = ({ onPress }: { onPress: () => void }) => (
	<TouchableOpacity onPress={onPress}>
		<Image source={images.arrowRight} />
	</TouchableOpacity>
)
