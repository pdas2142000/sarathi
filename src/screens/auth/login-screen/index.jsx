/**React imports */
import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

/**Styles*/
import { LoginStyles } from './styles'

/** Liabary*/
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { useNavigation } from '@react-navigation/native'

/**Components */
import CustomCountryCodePicker from '../../../components/form-utils/custom-country-code-picker'

/**Local imports*/
import { Color } from '../../../utils/constant'
import { ms, toast } from '../../../utils/helpers/metrics'
import { loginUser } from '../../../utils/api-call'
import FormFields from '../../../utils/models/FormFields.json'

/**Main export*/
const LoginScreen = () => {
    const styles = LoginStyles
    const Navigation = useNavigation()

    const [callingCode, setCallingCode] = useState({ flag: "IN", code: '+91' })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schema),
    })

    const LoginBuilder = (control) => {
        return [
            {
                name: 'phone',
                parent: 'login',
                styles: styles,
                type: "text",
                label: false,
                control: control,
                setCallingCode
            },
        ]
    }

    const LoginMutation = useMutation({
        mutationKey: ['user_login'],
        mutationFn: (data) => loginUser(data),
        onSuccess: async (response, data) => {
            console.log(data)
            if (response.data.status) {
                Navigation.navigate("OtpScreen", { phoneNumber: data?.phone });
                // Show success toast
                toast("success", { title: response?.data?.sent });
            } else {
                // Show error toast
                toast("error", { title: response?.data?.sent });
            }
        },
    });

    const OnSubmit = (data) => {
        LoginMutation.mutate(data)
    }

    return (
        <View style={styles.sa_main_container}>
            <View style={styles.sa_logo_container}>
            </View>
            <ScrollView >
                <View style={styles.sa_content_container}>
                    <View style={styles.sa_welcom_content}>
                        <Text style={styles.sa_hader_text}>Welcom to</Text>
                        <Text style={styles.sa_app_name}>Sarathi!</Text>
                    </View>
                    <View style={styles.sa_input_header_box}>
                        <Text style={styles.sa_input_header_text}>A 4 digit otp will send via sms to varifay your mobile number</Text>
                    </View>
                    <View style={styles.sa_input_container}>
                        {LoginBuilder(control).map((item, index) => {
                            return <CustomCountryCodePicker key={index} {...item} />
                        })}
                    </View>
                    <TouchableOpacity style={styles.sa_get_otp_btn} onPress={handleSubmit(OnSubmit)}>
                        {
                            LoginMutation.isPending ? <ActivityIndicator size={ms(15)} color={Color.sa_black} /> :
                                <Text style={styles.sa_get_otp_text}>Get OTP</Text>
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.sa_bottom_box}>
                    <Image source={require("../../../../assets/image/delevery_01.jpg")} style={styles.sa_img} />
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen

const phoneRegex = /^[0-9]{10}$/;
const Schema = yup.object().shape({
    phone: yup.string()
        .matches(phoneRegex, FormFields.login.phone.errors.invalid)
        .required(FormFields.login.phone.errors.required),
})
