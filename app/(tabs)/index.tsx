import '../../glocal.css'
import { Text } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView as RNSaveAreaView } from 'react-native-safe-area-context'
import { styled } from 'nativewind'

const SafeAreaView = styled(RNSaveAreaView)
export default function App() {
	return (
		<SafeAreaView className='flex-1 p-5 bg-white'>
			<Text className='text-xl font-manrope-medium '>Home</Text>
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
		</SafeAreaView>
	)
}
