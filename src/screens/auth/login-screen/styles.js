import { StyleSheet } from "react-native";
import { Color, Fonts } from "../../../utils/constant";
import { ms } from "../../../utils/helpers/metrics";

export const LoginStyles = StyleSheet.create({

    sa_main_container: {
        flex: 1,
        backgroundColor: Color.sa_white
    },
    sa_logo_container: {
        width: "100%",
        height: ms(150),
        backgroundColor: Color.sa_yellow
    },
    sa_content_container: {
        paddingHorizontal: ms(40)
    },
    sa_welcom_content: {
        marginTop: ms(50)
    },
    sa_hader_text: {
        fontFamily: Fonts.Font_400,
        fontSize: ms(20)
    },
    sa_app_name: {
        fontFamily: Fonts.Font_500,
        fontSize: ms(40),
        letterSpacing: ms(2)
    },
    sa_input_header_box: {
        marginTop: ms(45),
        paddingHorizontal: ms(10),
    },
    sa_input_header_text: {
        fontFamily: Fonts.Font_400,
        fontSize: ms(18),
        textAlign: "center"
    },
    sa_input_container: {
        marginTop: ms(40)
    },
    sa_get_otp_btn: {
        backgroundColor: Color.sa_yellow,
        height: ms(35),
        width:ms(150),
        alignSelf: "center",
        borderRadius: ms(40),
        alignItems: "center",
        justifyContent: "center",
        marginTop:ms(5)
    },
    sa_get_otp_text:{
        fontFamily: Fonts.Font_500,
        fontSize: ms(15),
        color:Color.sa_black
    },
    sa_bottom_box:{
        height:ms(250),
        marginTop:ms(20)
    },
    sa_img:{ 
        width: "100%", 
        height: "100%" 
    },

    //modal style content
    sa_modal_container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    sa_modal_content:{
        width: '100%',
        height: ms(500),
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        borderTopLeftRadius: ms(10),
        borderTopRightRadius: ms(10),
    },
    closeText: {
        fontSize: 16,
        color: '#007bff',
        marginTop: 10,
    },
   
   
})

