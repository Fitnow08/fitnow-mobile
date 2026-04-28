import { icons } from '@/shared/constants/icon'
import { TrainingItem } from '@/shared/ui/TrainingCarousel'

export const tabs = [
	{ name: 'index', title: 'Home', icon: icons.home },
	{ name: 'progress', title: 'Progress', icon: icons.calendar },
	{ name: 'alltrains', title: 'Training', icon: icons.weight },
	{ name: 'profile', title: 'Profile', icon: icons.profile }
]

export const Home_USER = { name: 'Мария' }
export const ACTIVE_COLOR = 'rgba(175, 253, 126, 1)'
export const ITEMSSlider: TrainingItem[] = [
	{
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
	},
	{
		id: '2',
		title: 'Силовая',
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
	},
	{
		id: '3',
		title: 'Йога',
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
]
