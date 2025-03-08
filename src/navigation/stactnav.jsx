/**React imports */
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

/**Libraries */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**Components */
import LoginScreen from '../screens/auth/login-screen';
import HomeScreen from '../screens/main/home-screen';

/**Local imports*/
import { useAuth } from '../utils/context/AuthContext';
import { Color } from '../utils/constant';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    );
};

export const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    );
};


export const AppNavigation = () => {

    const { Token } = useAuth()
    console.log(Token)

    const [Loading, SetLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            SetLoading(false)
        }, 1500)
    }, [])

    if (Loading) {
        return <SplashScreen />
    } else {
        return (
            <>
                {Token ?
                    (
                        <MainStack />
                    ) :
                    (
                        <AuthStack />
                    )}

            </>
        )
    }

}

const SplashScreen = () => (
    <View style={styles.se_container}>
        <View style={styles.se_indiator_container} >
            <ActivityIndicator size="large" color={Color.sa_black} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    se_container: {
        flex: 1,
        backgroundColor: Color.sa_yellow
    },
    se_indiator_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

});