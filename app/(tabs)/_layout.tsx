import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
// this right here is where we define what the tab layout looks like
export default function TabLayout() {
  return (
    <Tabs
        // similar to styles in views we can add screen options here
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.gray,
            tabBarStyle: {
                backgroundColor: Colors.background,
                height: 40,
                elevation: 0,
                paddingBottom: 8,
            }

        }}
    >
        <Tabs.Screen
            name='index'
            options={{
                tabBarIcon: ({size, color}) => <Ionicons 
                name='home'
                size={size}
                color={color} 
                />
            }}

        />
        <Tabs.Screen
            name='bookmarks'
            options={{
                tabBarIcon: ({size, color}) => <Ionicons 
                name='bookmark'
                size={size}
                color={color} 
                />
            }}
            
        />
        <Tabs.Screen
            name='create'
            options={{
                tabBarIcon: ({focused,size, color}) => <Ionicons 
                name={focused ? "add-circle" : "add-circle-outline"}
                size={size}
                color={Colors.primary} 
                />
            }}
            
        />
        <Tabs.Screen
            name='notifications'
            options={{
                tabBarIcon: ({size, color}) => <Ionicons 
                name='notifications'
                size={size}
                color={color}
                />
            }}
            
        />
        <Tabs.Screen
            name='profile'
            options={{
                tabBarIcon: ({size, color}) => <Ionicons 
                name='person-circle'
                size={size}
                color={color} 
                />
            }}
            
        />
    </Tabs>
  )
}