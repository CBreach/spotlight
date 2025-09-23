import InitialLayout from "@/components/InitialLayout";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
// ok so i was a bit confused by the syntax, but basically the exclamation mark at the end tells the compiler that this value will never be null or undefined, making the if statement below redundant

if (!publishableKey) { // although this is redundant, ill keep it just to know why teh app crashed in case of a missing key 
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  return(
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <SafeAreaProvider>
          <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'black'
          }}>
            <InitialLayout />
          </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
