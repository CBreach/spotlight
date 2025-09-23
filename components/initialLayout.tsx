import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";



export default function InitialLayout() {
    const {isLoaded, isSignedIn}= useAuth();

    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if(!isLoaded) return;
        
        const inAuthPage = segments[0] === "(auth)"; // if this is true it means that the user is in the auth page
        if(!isSignedIn && !inAuthPage){
            console.log("redirecting to login");
            router.replace("/(auth)/login");
        }
        else if(isSignedIn && inAuthPage){
            console.log("redirecting to home");
            router.replace("/(tabs)");
        }

    }, [isLoaded, isSignedIn, segments])

    if(!isLoaded) return null;

    return <Stack screenOptions={{headerShown : false}}/>;
}