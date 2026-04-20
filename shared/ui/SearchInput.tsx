import { TextInput, View, useColorScheme } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useSearchStore } from '@/shared/store/searchStore'

interface SearchInputProps {
	placeholder?: string
}

export const SearchInput = ({ placeholder = 'Поиск...' }: SearchInputProps) => {
	const colorScheme = useColorScheme()
	const isDark = colorScheme === 'dark'
	const query = useSearchStore(s => s.query)
	const setQuery = useSearchStore(s => s.setQuery)

	return (
		<View className='flex-row items-center gap-2 px-2 py-3 rounded-2xl bg-gray-600 dark:bg-bginputdark dark:opacity-30 '>
			<Ionicons
				name='search-outline'
				size={30}
				color={isDark ? '#9ca3af' : '#6b7280'}
			/>
			<TextInput
				value={query}
				onChangeText={setQuery}
				placeholder={placeholder}
				placeholderTextColor={isDark ? '#9ca3af' : '#6b7280'}
				className='flex-1 text-dark dark:text-white font-manrope bg-transparent'
			/>
		</View>
	)
}
