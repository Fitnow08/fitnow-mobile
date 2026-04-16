import {View,Text} from "react-native";
import {Link} from "expo-router";

const SignIn = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Link href="/(auth)/sign-up" className="mt-4 rounded-md text-blue-500 p4">Create account</Link>
        </View>
    )
}

export default SignIn;