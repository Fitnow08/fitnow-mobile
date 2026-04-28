import { View, Image } from 'react-native'
import { BlurView } from 'expo-blur'
import { MyText } from '@/shared/ui/Text'
import { ITrainCategories } from '@/shared/ui/TrainingCarousel'

interface TrainingCategoriesProps {
	categories: ITrainCategories[]
}

export const TrainingCategories = ({ categories }: TrainingCategoriesProps) => (
	<View
		className='mb-4 mx-4'
		style={{ borderRadius: 16, backgroundColor: '#1C1C1E' }}
	>
		<View className='p-4'>
			<View className='flex-row gap-3'>
				{categories.map(item => (
					<BlurView
						key={item.title}
						className='flex-row items-center gap-1 p-1 overflow-hidden'
						style={{ borderRadius: 16 }}
					>
						<Image source={item.icon} />
						<MyText className='text-white opacity-80 font-sfpro-medium text-sm'>
							{item.title}
						</MyText>
					</BlurView>
				))}
			</View>
		</View>
	</View>
)
