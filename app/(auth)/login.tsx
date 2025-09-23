import { Colors } from "@/constants/theme";
import { styles } from "@/styles/auth.styles";
import { useSSO } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
export default function Login() {
    const {startSSOFlow} = useSSO()
    const router = useRouter()
    const handleSignIn = async(provider : 'google'|'apple') =>{
        try{
            const {createdSessionId, setActive} = await startSSOFlow({strategy: `oauth_${provider}`})
            if(createdSessionId && setActive){
                setActive({session: createdSessionId})
                router.replace("../(tabs)")
            }
        } catch(err){
            console.log("Error during Google Sign-In: ", err)
        }
    }
    return(
        <View style={styles.container}>
            {/* Branding*/}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name="leaf" size={32} color={Colors.primary}/>
                </View>
                <Text style={styles.appName}>Spotlight</Text>
                <Text style={styles.tagline}>Connect with people, share the moment</Text>
            </View>
            {/* Illustration*/}
            <View style={styles.illustrationContainer}>
                <Image 
                    source={require("../../assets/images/Contact us-bro.png")} 
                    style={styles.illustration}
                    resizeMode="cover"
                />
            </View>

            {/* Login Section*/}
            <View style={styles.loginSection}>
                <TouchableOpacity 
                    style={styles.googleButton}
                    onPress={() => handleSignIn("google")}
                    activeOpacity={0.8}
                >
                    <View style={styles.googleIconContainer}>
                        <Ionicons name="logo-google" size={20} color={Colors.surface}/>
                    </View>
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={() => handleSignIn("apple")}
                    activeOpacity={0.8}
                >
                    <View style={styles.googleIconContainer}>
                        <Ionicons name="logo-apple" size={20} color={Colors.surface}/>
                    </View>
                    <Text style={styles.googleButtonText}>Continue with Apple</Text>

                </TouchableOpacity>
                <Text style={styles.termsText}>By continuing you agree with our terms of service</Text>
            </View>

        </View>
    )
}