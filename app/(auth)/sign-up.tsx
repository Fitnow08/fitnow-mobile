import {View,Text} from "react-native";
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Link href="/(auth)/sign-in" className="mt-4 rounded-md text-blue-500 p4">Login account</Link>
        </View>
    )
}

export default SignUp;