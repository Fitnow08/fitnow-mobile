import { useColorScheme, Text as RNText, TextProps } from 'react-native'

export const MyText = ({ className, ...props }: TextProps) => {
	const colorScheme = useColorScheme()
	const color = colorScheme === 'dark' ? 'text-white' : 'text-dark'

	return (
		<RNText className={`${color} ${className ?? ''}`} {...props} />
	)
}
