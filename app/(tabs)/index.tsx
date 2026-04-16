import '../../glocal.css'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function App() {
	return (
		<View className='flex-1 items-center justify-center bg-white'>
			<Text className='text-xl font-bold text-blue-500'>Test</Text>
			<Link
				href='/(tabs)/alltrains'
				className='mt-4 rounded-md text-blue-500 p4 bg-primary'
			>
				All trains
			</Link>
			<Link href='/(auth)/sign-in'>Login account</Link>
			<Link
				href={{
					pathname: '/training/[id]',
					params: { id: 'test' }
				}}
				className='mt-4 rounded-md text-blue-500 p4 bg-primary'
			>
				training by id
			</Link>
		</View>
	)
}
