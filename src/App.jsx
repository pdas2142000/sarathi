import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

/** Liabary*/
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from './navigation/stactnav';
import { AuthProvider } from './utils/context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { ms } from './utils/helpers/metrics';
import { Color, Fonts } from './utils/constant';

const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <AuthProvider>
                    <AppNavigation />
                </AuthProvider>
            </NavigationContainer>
            <Toast
                topOffset={Platform.OS === "ios" ? 50 : 20}
                position="top"
                keyboardOffset={10}
                config={{
                    success: ({ text1 }) => (
                        <View style={[styles.ws_toast_container, { borderColor: "#68c778" }]} >
                            <Text style={styles.ws_toast_text}>{text1}</Text>
                        </View>
                    ),
                    error: ({ text1 }) => (
                        <View style={[styles.ws_toast_container, { borderColor: "#fd6301" }]} >
                            <Text style={styles.ws_toast_text}>{text1}</Text>
                        </View>
                    ),
                }}
            />
        </QueryClientProvider>
    );
}

export default App;

const styles = StyleSheet.create({
    ws_toast_container: {
        backgroundColor: "#F2F6F9",
        paddingHorizontal: ms(10),
        paddingVertical: ms(6),
        borderRadius: 5,
        borderLeftWidth: 5,
        width: "100%",
        maxWidth: '90%',
        alignSelf: 'center',
    },
    ws_toast_text: {
        color: Color.sa_black,
        flexWrap: "wrap",
        fontFamily: Fonts.Font_500,
        fontSize: ms(15),
        lineHeight: ms(20),
        marginVertical: ms(7)
    }
})
