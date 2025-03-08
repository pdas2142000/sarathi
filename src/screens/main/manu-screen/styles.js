import { StyleSheet } from "react-native";
import { ms } from "../../../utils/helpers/metrics";
import { Color, CommonSizes, Fonts } from "../../../utils/constant";

export const MenuStyles = StyleSheet.create({
    sa_container: {
        flex: 1,
        backgroundColor: Color.sa_background,
        paddingHorizontal: CommonSizes.pedding_value
    },
    sa_search_btn: {
        backgroundColor: Color.sa_yellow,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: ms(20),
        height: ms(50),
        borderRadius: ms(10)
    },
    sa_search_text: {
        fontFamily: Fonts.Font_600,
        fontSize: ms(16),
        color: Color.sa_black,
        marginLeft:ms(5)
    },
})
