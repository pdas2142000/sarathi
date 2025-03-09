
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

/** Icon */
import LeftIcon from "../../../assets/svgs/left.svg"

/** Library */
import { useNavigation } from '@react-navigation/native'
import { IconProps } from '../../utils/helpers/Iconprops';
import { ms } from '../../utils/helpers/metrics';
import { Color, Fonts } from '../../utils/constant';


const AppHeader = ({ title, willGoBack, children }) => {
    const Navigation = useNavigation()

    return (
        <>
            <SafeAreaView/>
            <View style={[styles.sa_header_content,]}>
                {title ? <Text style={[styles.HeaderTextStyle]}>{title}</Text> : null}
                {
                    willGoBack ?
                        <View style={styles.BackButtonWrapStyle}>
                            <TouchableOpacity
                                style={[
                                    styles.sa_hade_contvent,
                                    styles.sa_search_back
                                ]}
                                onPress={() => Navigation.goBack()}
                            >
                                <LeftIcon  {...IconProps(ms(33))} />
                            </TouchableOpacity>
                        </View> : null
                }

                <View style={styles.sa_content_style}>
                    {children}
                </View>
            </View>
        </>
    );
}

export default AppHeader;

const styles = StyleSheet.create({
    sa_header_content: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: ms(15),
        height: ms(55),
        backgroundColor:Color.sa_white
    },
    HeaderTextStyle: {
        fontFamily: Fonts.Font_500,
        fontSize: ms(20),
        color: Color.sa_black,
        textTransform: "capitalize"
    },
    BackButtonWrapStyle: {
        position: 'absolute',
        left: ms(8),
    },
    sa_content_style: {
        position: 'absolute',
        right: ms(17),
        flexDirection: "row"
    },
    sa_hade_contvent: {
        flexDirection: "row",
        alignItems: 'center'
    },
    sa_search_back: {
        height: "100%"
    },
});
