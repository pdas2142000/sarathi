/**React imports */
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

/**Styles*/
import { OtpStyles } from './style'
import { Color } from '../../../utils/constant'

/**Components */
import OtpInputcomponents from '../../../components/form-utils/otp-input'
import { ms, toast } from '../../../utils/helpers/metrics'

/** Liabary*/
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useIsFocused } from '@react-navigation/native'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

/**Icons*/
import CheckIcon from "../../../../assets/svgs/check.svg"

/**Local imports*/
import { useAuth } from '../../../utils/context/AuthContext'
import { IconProps } from '../../../utils/helpers/Iconprops'
import { VarifayOtp } from '../../../utils/api-call'
import FormFields from '../../../utils/models/FormFields.json'

/**Main export*/
const OtpScreen = ({ route }) => {
    const styles = OtpStyles
    const otpRef = useRef(null)
    const { phoneNumber } = route.params || {}
    const { login } = useAuth()
    const isFocused = useIsFocused()

    const [isChecked, setIsChecked] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [isError, setIsError] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schema),
    })

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

    const UserVarifayOtp = useMutation({
        mutationKey: ['user_otp_varifay'],
        mutationFn: (data) => VarifayOtp(data),
        onSuccess: async (response) => {
    
            if (response.data.status) {
                login({ Token: response?.data?.token || null });
                // Show success toast
                toast("success", { title: "successfully logged in" });
            } else {
                // Show error toast
                toast("error", { title: response?.data.sent });
            }
        },
    });

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

    const VerifyOtpSubmit = (data) => {
        if (!isChecked) {
            setIsError(true);
            return;
        }
        setIsError(false);
        const payload = { ...data, phone: phoneNumber }
        UserVarifayOtp.mutate(payload)
    }

    const startCountdown = () => {
        setCountdown(60);
    };

    useEffect(() => {
        startCountdown();
    }, [isFocused]);

    return (
        <View style={styles.sa_main_container}>
            <View style={styles.sa_logo_container} />
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
            <View style={styles.sa_otp_input_container}>
                {OtpBuilder(control).map((item, index) => {
                    return <OtpInputcomponents key={index} {...item} />
                })}
            </View>
            <TouchableOpacity
                style={[styles.sa_get_otp_btn, styles.sa_submit_otp_btn]}
                onPress={handleSubmit(VerifyOtpSubmit)}
            >
                {
                    UserVarifayOtp.isPending ? <ActivityIndicator size="small" color={Color.sa_black} /> :
                        <Text style={[styles.sa_get_otp_text, { fontSize: ms(20) }]}>Next</Text>
                }
            </TouchableOpacity>
            <View style={{ marginVertical: ms(25), marginLeft: ms(30) }}>
                <TouchableOpacity
                    style={styles.sa_bottom_box_container}
                    onPress={() => {
                        setIsChecked(!isChecked);
                        if (!isChecked) setIsError(false); // Clear error when checked
                    }}
                    activeOpacity={0.7}
                >
                    <View style={styles.sa_check_box}>
                        {isChecked && <CheckIcon {...IconProps(ms(10))} fill={Color.sa_black} />}
                    </View>
                    <Text style={styles.sa_check_box_text}>By verifying the OTP, you are accepting the terms and conditions.</Text>
                </TouchableOpacity>
                {isError && <Text style={styles.sa_check_box_error}>Please accept terms and conditions</Text>}
            </View>
            <View style={styles.sa_resend_container}>
                <Text style={styles.sa_resend_text} >Didn't receive OTP code</Text>
                <TouchableOpacity onPress={startCountdown} disabled={countdown > 0}>
                    <Text style={[styles.sa_resend_title]}>
                        {countdown > 0 ? `Resend Code in ${countdown}s` : 'Resend Code'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OtpScreen

const Schema = yup.object().shape({
    varifay_otp: yup
        .string()
        .required(FormFields.otp.varifay_otp.errors.required)
        .length(
            FormFields.otp.varifay_otp.errors.pattern.value,
            FormFields.otp.varifay_otp.errors.pattern.message,
        )
})