import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { Platform, View } from 'react-native'
import { tabs, ACTIVE_COLOR } from '@/shared/constants/data'
import TabIcon from '@/shared/ui/Icon'

const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: ACTIVE_COLOR,
				tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
				tabBarStyle: {
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					zIndex: 100,
					backgroundColor:
						Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
					borderTopWidth: 0,
					elevation: 0
				},
				tabBarBackground: () =>
					Platform.OS === 'android' ? (
						<View
							style={{ flex: 1, backgroundColor: 'rgba(60, 60,67, 0.7)' }}
						/>
					) : (
						<BlurView intensity={60} tint='dark' style={{ flex: 1 }} />
					)
			}}
		>
			{tabs.map(tab => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: tab.title,
						tabBarIcon: ({ focused }) => (
							<TabIcon focused={focused} icon={tab.icon} />
						)
					}}
				/>
			))}
			<Tabs.Screen name='training' options={{ href: null }} />
		</Tabs>
	)
}

export default TabLayout
