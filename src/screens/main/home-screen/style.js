import { StyleSheet } from "react-native";
import { Color, CommonSizes, Fonts } from "../../../utils/constant";
import { ms } from "../../../utils/helpers/metrics";

export const HomeStyles = StyleSheet.create({
    sa_container: {
        flex: 1,
        backgroundColor: Color.sa_background,
        paddingHorizontal:CommonSizes.pedding_value
    },
    sa_content: {
        height: ms(150),
        backgroundColor: Color.sa_yellow,
        borderRadius: ms(10),
        marginTop: ms(20),
        paddingHorizontal: ms(16),
        justifyContent: "center"
    },
    sa_search_btn: {
        backgroundColor: Color.sa_yellow,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: ms(20),
        height: ms(50),
        borderRadius: ms(10)
    },
    sa_search_text: {
        fontFamily: Fonts.Font_600,
        fontSize: ms(16),
        color: Color.sa_black
    },
    sa_logout_container: {
        borderWidth: ms(1.2),
        padding: ms(10),
        borderRadius: ms(10),
    },
    sa_list_image: {
        width: ms(60),
        height: ms(60),
        borderRadius: ms(10),
        backgroundColor: Color.sa_yellow,
        alignItems: "center",
        justifyContent: "center"
    },
    sa_list_image_btn:{
        flexDirection:"row",
        justifyContent :"space-between"
    },
    sa_list_right:{
        flexDirection:"row",
        alignItems:"center",
    },
    sa_image: {
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },
    sa_vehicle_name:{
        fontFamily:Fonts.Font_500,
        fontSize:ms(18),
        color:Color.sa_black   
    },
    sa_vehicle_number:{
        fontFamily:Fonts.Font_500,
        fontSize:ms(15),
        color:Color.sa_grey,
    },
    sa_vehicle_details:{
        marginLeft:ms(10)
    },
    sa_vehicle_type:{
        fontFamily:Fonts.Font_600,
        color:Color.sa_black,
        marginTop:ms(5)
    },
    sa_notfound:{
        width:ms(220),
        height:ms(220),
        alignSelf:"center",
        marginVertical:ms(20)
    },
    // sa_image:{
    //     width:"100%",
    //     height:"100%",
    //     resizeMode:"cover"
    // }
})
