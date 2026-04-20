import '@/glocal.css'
import { View, Image } from 'react-native'

import { SafeAreaView as RNSaveAreaView } from 'react-native-safe-area-context'
import { styled } from 'nativewind'

import images from '@/shared/constants/images'
import { MyText } from '@/shared/ui/Text'
import { ThemeToggle } from '@/shared/ui/ThemeToggle'
import { NotificationBell } from '@/shared/ui/NotificationBell'
import { SearchInput } from '@/shared/ui/SearchInput'
import { Slider } from '@/shared/ui/Slider'
import { useState } from 'react'

const SafeAreaView = styled(RNSaveAreaView)
export default function App() {
	const [intensity, setIntensity] = useState(50)
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
			<View className='flex-row justify-between items-center'>
				<Slider min={0} max={100} value={intensity} onChange={setIntensity} />
			</View>
		</SafeAreaView>
	)
}
