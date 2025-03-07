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
    sa_submit_otp_btn: {
        height: ms(45),
        width:ms(220),
      
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
    sa_modal_header:{
        position:"relative",
        width:"100%",
        alignItems:"center",
    },
    sa_header_box:{
        width:ms(180),
        height:ms(180),
        position:"absolute",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:ms(5),
        borderColor:Color.sa_white,
        backgroundColor:Color.sa_yellow,
        borderRadius:ms(100), 
        top:ms(-100), 
    },
    sa_header_img_box:{
        width:ms(120),
        height:ms(120),
    },
    sa_header_img:{
        width:"100%",
        height:"100%",
    },
    sa_content:{
        marginTop:ms(100)
    },
    sa_modal_otp_text:{
        alignItems:"center",
        justifyContent:"center"
    },
    sa_otp_text_hade:{
        fontFamily:Fonts.Font_500,
        fontSize:ms(19),
        color:Color.sa_black
    },
    sa_otp_text:{
        fontFamily:Fonts.Font_500,
        fontSize:ms(16),
        color:Color.sa_grey + "80",
        marginTop:ms(5)
    },

    sa_check_box:{
        width:ms(18),
        height:ms(18),
        borderRadius:ms(4),
        backgroundColor:Color.sa_light_blue,
        alignItems:"center",
        justifyContent:"center",
        marginRight:ms(10),

    },
    sa_bottom_box_container:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:ms(30),
        marginRight:ms(10),
        marginVertical:ms(25)
    },
    sa_check_box_text:{
        fontFamily:Fonts.Font_400,
        fontSize:ms(15),
    },
    sa_resend_text:{
        fontFamily:Fonts.Font_400,
        fontSize:ms(17),
        color:Color.sa_grey,
    },
    sa_resend_title:{
        fontFamily:Fonts.Font_600,
        fontSize:ms(18),
        color:Color.sa_blue,
        textAlign:"center"
    }
})

