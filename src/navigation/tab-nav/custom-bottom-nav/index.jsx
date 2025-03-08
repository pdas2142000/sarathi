
/**React Import */
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

/**local Import */
import { ms } from '../../../utils/helpers/metrics'
import { Color, Fonts } from '../../../utils/constant'

/**Icon */
import HomeIcon from "../../../../assets/svgs/home.svg"
import MenuIcon from "../../../../assets/svgs/menu.svg"
import { IconProps } from '../../../utils/helpers/Iconprops'

/** Main Export */
export function MyTabBar({ state, descriptors, navigation }) {

    return (
        <SafeAreaView >
            <View style={[styles.ws_main_wrapper,]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key]
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name
                    const isFocused = state.index === index
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params)
                        }
                    }
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        })
                    }

                    const toggle_color = isFocused ? Color.sa_black : "#b3b4b4"

                    return (
                        <TouchableOpacity
                            style={styles.ws_content_box}
                            activeOpacity={0.7}
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            {
                                label == "HomeScreen" ?
                                    <>
                                        <HomeIcon
                                            {...IconProps(ms(25))}
                                            fill={toggle_color}
                                        />
                                        <Text
                                            style={[
                                                styles.ws_button_text,
                                                { color: toggle_color }
                                            ]}
                                        >
                                            Home
                                        </Text>
                                    </>
                                    : label == "MenuScreen" ?
                                        <>
                                            <MenuIcon
                                                {...IconProps(ms(23))}
                                                fill={toggle_color}
                                            />
                                            <Text
                                                style={[
                                                    styles.ws_button_text,
                                                    { color: toggle_color }
                                                ]}
                                            >
                                                Menu
                                            </Text>
                                        </> : null
                            }
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    ws_main_wrapper: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Color.sa_white,
        borderTopRightRadius: ms(15),
        borderTopLeftRadius: ms(15),
        height: ms(60),
    },
    ws_button_text: {
        fontFamily: Fonts.Font_500,
        fontSize: ms(12),
        textTransform: "capitalize",
        marginBottom: ms(-5),
        marginTop: ms(5)
    },
    ws_img_box: {
        width: ms(50),
        aspectRatio: 1 / 0.3,
        marginBottom: ms(3),
        marginTop: ms(2)
    },
    ws_content_box: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: ms(5)
    },
    ws_img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    ws_active_icon_box: {
        backgroundColor: "#98a7db8a",
    },
    ws_setting_box: {
        width: ms(40),
        height: ms(40),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ms(20)
    }
})
