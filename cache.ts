import { TokenCache } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const createTokenCache = (): TokenCache => {
    return{
        getToken: async (key: string) => {
            try{
                const item = await SecureStore.getItemAsync(key);
                if(item){
                    console.log(`${key} key was used \n`);
                }
                else{
                    console.log('no values stored under key')
                }
                return item;
            }
            catch(err){
                console.error('Error getting token from cache', err);
                await SecureStore.deleteItemAsync(key);
                return null;
            }
        },
        saveToken: (key : string, token: string) => {
            return SecureStore.setItemAsync(key, token)
        },
    }
}

//keynote that secureStore is not available on the web
export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined;