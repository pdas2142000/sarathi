import { StyleSheet } from "react-native";
import { ms } from "../../../utils/helpers/metrics";
import { Color, Fonts } from "../../../utils/constant";

export const OtpStyles = StyleSheet.create({
    sa_main_container: {
        flex: 1,
        backgroundColor: Color.sa_white
    },
    sa_logo_container: {
        width: "100%",
        height: ms(150),
        backgroundColor: Color.sa_yellow
    },

    sa_modal_header: {
        position: "relative",
        width: "100%",
        alignItems: "center",
    },
    sa_header_box: {
        width: ms(165),
        height: ms(165),
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: ms(5),
        borderColor: Color.sa_white,
        backgroundColor: Color.sa_yellow,
        borderRadius: ms(100),
        top: ms(-100),
    },
    sa_header_img_box: {
        width: ms(110),
        height: ms(110),
    },
    sa_header_img: {
        width: "100%",
        height: "100%",
    },

    sa_content: {
        marginTop: ms(100)
    },
    sa_modal_otp_text: {
        alignItems: "center",
        justifyContent: "center"
    },
    sa_otp_text_hade: {
        fontFamily: Fonts.Font_500,
        fontSize: ms(19),
        color: Color.sa_black
    },
    sa_otp_text: {
        fontFamily: Fonts.Font_500,
        fontSize: ms(16),
        color: Color.sa_grey + "80",
        marginTop: ms(5)
    },
    sa_otp_input_container: {
        marginVertical: ms(30),
        alignItems: "center"
    },
    sa_get_otp_btn: {
        backgroundColor: Color.sa_yellow,
        height: ms(35),
        width: ms(150),
        alignSelf: "center",
        borderRadius: ms(40),
        alignItems: "center",
        justifyContent: "center",
        marginTop: ms(5)
    },
    sa_submit_otp_btn: {
        height: ms(45),
        width: ms(220),

    },
    sa_get_otp_text: {
        fontFamily: Fonts.Font_500,
        fontSize: ms(15),
        color: Color.sa_black
    },
    sa_check_box: {
        width: ms(18),
        height: ms(18),
        borderRadius: ms(4),
        backgroundColor: Color.sa_light_blue,
        alignItems: "center",
        justifyContent: "center",
        marginRight: ms(10),

    },
    sa_bottom_box_container: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: ms(10),
    },
    sa_check_box_error: {
        color: "#B8001F",
        fontFamily: Fonts.Font_500,
        fontSize: ms(15),
        marginTop: ms(5),
    },
    sa_check_box_text: {
        fontFamily: Fonts.Font_400,
        fontSize: ms(15),
    },
    sa_resend_text: {
        fontFamily: Fonts.Font_400,
        fontSize: ms(17),
        color: Color.sa_grey,
        textAlign: "center"
    },
    sa_resend_title: {
        fontFamily: Fonts.Font_600,
        fontSize: ms(18),
        color: Color.sa_blue,
        textAlign: "center"
    }
})
