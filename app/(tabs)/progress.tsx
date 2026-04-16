import { Text } from 'react-native'
import { SafeAreaView as RNSaveAreaView } from 'react-native-safe-area-context'
import { styled } from 'nativewind'

const SafeAreaView = styled(RNSaveAreaView)
const Progress = () => {
	return (
		<SafeAreaView className='flex-1 p-5'>
			<Text>Progress page</Text>
		</SafeAreaView>
	)
}

export default Progress
