import { View, Text, TouchableOpacity, ScrollView, Image, Modal, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { LoginStyles } from './styles'
import { useForm } from 'react-hook-form'
import CustomCountryCodePicker from '../../../components/form-utils/custom-country-code-picker'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import OtpPopup from '../../../components/form-utils/otp-popup'
import { Color } from '../../../utils/constant'
import OtpInputcomponents from '../../../components/form-utils/otp-input'
import { ms, toast } from '../../../utils/helpers/metrics'
import CheckIcon from "../../../../assets/svgs/check.svg"
import { IconProps } from '../../../utils/helpers/Iconprops'
import { useMutation } from '@tanstack/react-query'
import { loginUser, VarifayOtp } from '../../../utils/api-call'
import { useAuth } from '../../../utils/context/AuthContext'


const LoginScreen = () => {
    const { login } = useAuth()
    const styles = LoginStyles
    const otpRef = useRef(null)
    const [isChecked, setIsChecked] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [modalVisible, setModalVisible] = useState(false)
    const [countdown, setCountdown] = useState(0);
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

    const OtpBuilder = (control) => {
        return [
            {
                name: 'varifay_otp',
                parent: 'otp',
                type: "text",
                label: false,
                control: control,
                otpRef,
                otp_digits: 4
            },
        ]
    }


    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    const LoginMutation = useMutation({
        mutationKey: ['user_login'],
        mutationFn: (data) => loginUser(data),
        onSuccess: async (response) => {
            if (response.status) {
                // Show success toast
                toast("success", { title: response.sent });

            } else {
                // Show error toast
                toast("error", { title: response.sent });
            }
        },
    });

    const UserVarifayOtp = useMutation({
        mutationKey: ['user_otp_varifay'],
        mutationFn: (data) => VarifayOtp(data),
        onSuccess: async (response) => {
            console.log(response)
            if (response.status) {
                login({ Token: response?.token || null });
                // Show success toast
                toast("success", { title: response.sent });
            } else {
                // Show error toast
                toast("error", { title: response.sent });
            }
        },
    });


    const startCountdown = () => {
        LoginMutation.mutate({ phone: phoneNumber })
        setCountdown(60);
    };

    const OnSubmit = (data) => {
        setPhoneNumber(data.phone);
        LoginMutation.mutate(data)
        setModalVisible(true)
        startCountdown();
    }

    const VarifayOtpSubmit = (data) => {
        UserVarifayOtp.mutate(data)
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

            {/* Modal Component */}
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Close modal on back button press
            >
                <View style={styles.sa_modal_container}>
                    <View style={styles.sa_modal_content}>

                        <View style={styles.sa_modal_header}>
                            <View style={styles.sa_header_box}>
                                <View style={styles.sa_header_img_box}>
                                    <Image source={require("../../../../assets/image/otp_02.png")} style={styles.sa_header_img} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.sa_content}>
                            <View style={styles.sa_modal_otp_text}>
                                <Text style={styles.sa_otp_text_hade}>OTP Varification</Text>
                                <Text style={styles.sa_otp_text}>Enter OTP code sent to <Text style={{ color: Color.sa_black, }}>+91 {phoneNumber}</Text></Text>
                            </View>
                        </View>

                        <View style={{ marginVertical: ms(30) }}>
                            {OtpBuilder(control).map((item, index) => {
                                return <OtpInputcomponents key={index} {...item} />
                            })}
                        </View>

                        <TouchableOpacity
                            style={[styles.sa_get_otp_btn, styles.sa_submit_otp_btn]}
                            onPress={handleSubmit(VarifayOtpSubmit)}
                        >
                            {
                                UserVarifayOtp.isPending ? <ActivityIndicator size="small" color={Color.sa_black} /> :
                                    <Text style={[styles.sa_get_otp_text, { fontSize: ms(20) }]}>Next</Text>
                            }
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.sa_bottom_box_container}
                            onPress={() => setIsChecked(!isChecked)}
                            activeOpacity={0.7}
                        >
                            <View style={styles.sa_check_box}>
                                {isChecked && <CheckIcon {...IconProps(ms(10))} fill={Color.sa_black} />}
                            </View>
                            <Text style={styles.sa_check_box_text}>By verifying the OTP, you are accepting the terms and conditions.</Text>
                        </TouchableOpacity>

                        <View style={styles.sa_resend_container}>
                            <Text style={styles.sa_resend_text} >Didn't receive OTP code</Text>
                            <TouchableOpacity onPress={startCountdown} disabled={countdown > 0}>
                                <Text style={[styles.sa_resend_title]}>
                                    {countdown > 0 ? `Resend Code in ${countdown}s` : 'Resend Code'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default LoginScreen

const Schema = yup.object().shape({
    phone: yup.string()
        .required('email is required'),

})
