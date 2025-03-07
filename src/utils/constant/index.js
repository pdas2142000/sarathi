import { StyleSheet } from "react-native"
import { ms } from "../helpers/metrics"

export const Color = {
    sa_yellow: '#eccb00',
    sa_border:"#303030",
    sa_light_blue:"#cfe4ff",
    sa_border_blue:"#8faeee",
    sa_blue:"#224081",
    sa_white:"white",
    sa_grey:"#818384",
    sa_black:"#000000",
}

export const Fonts = {
    Font_100: 'Outfit-Thin',
    Font_200: 'Outfit-ExtraLight',
    Font_300: 'Outfit-Light',
    Font_400: 'Outfit-Regular',
    Font_500: "Outfit-Medium",
    Font_600: 'Outfit-SemiBold',
    Font_700: 'Outfit-Bold',
    Font_800: 'Outfit-Black',
}

export const CommonSizes = {
    pedding_value: ms(16)
}

export const FormStyle = StyleSheet.create({
    input_wrap: {
        marginBottom: ms(10),
    },
    FormLabel: {
        color: Color.lm_black,
        fontFamily: Fonts.Font_500,
        fontSize:  ms(14),
        marginBottom: ms(9),
    },
    wrapper:{
        height:  ms(45),
        borderRadius: ms(5),
        backgroundColor:Color.sa_white,
        flexDirection:"row",
        alignItems:"center"
    },
    input_field: {
        paddingHorizontal: ms(15),
        color: Color.lm_color_primary_dark,
        fontSize: ms(15),
        fontFamily: Fonts.Font_500,
        flex:1
    },
    error: {
        color: Color.error,
        fontSize: ms(12),
        paddingTop: ms(4),
        fontFamily: Fonts.Font_500
    },
})