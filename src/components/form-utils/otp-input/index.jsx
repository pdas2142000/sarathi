/** React Imports */
import React from 'react'
import { Text, StyleSheet } from 'react-native'

/** Libraries */
import { OtpInput } from "react-native-otp-entry"
import { Controller } from 'react-hook-form'

/** Local Imports */
import { ms } from '../../../utils/helpers/metrics'

/** Local Imports */
import { Color, Fonts } from '../../../utils/constant'

/** Main Export */
const OtpInputcomponents = ({ name, control, otpRef, otp_digits }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, value, fieldState: { error } }) => {
                console.log(value)
                const errorMessage = error?.message || (otp_digits === undefined ? "OTP digits are missing" : "");
                return (
                    <>
                        <OtpInput
                            ref={otpRef}
                            numberOfDigits={otp_digits}
                            focusColor="#608BC1"
                            focusStickBlinkingDuration={500}
                            onTextChange={(text) => onChange(text)}
                            theme={{
                                containerStyle: styles.container,
                                pinCodeContainerStyle: styles.pinCodeContainer,
                                pinCodeTextStyle: styles.pinCodeText,
                                focusStickStyle: styles.focusStick,
                                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                            }}
                        />
                        {errorMessage ? (

                            <Text style={[styles.ws_error,]} numberOfLines={1} ellipsizeMode="tail">
                                {errorMessage}
                            </Text>
                        ) : null
                        }
                    </>
                )
            }
            }
        />

    )
}

export default OtpInputcomponents

const styles = StyleSheet.create({
    container: {
        width: ms(250),
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    pinCodeContainer: {
        width: ms(45),
        height: ms(45),
        borderRadius: ms(5),
        borderWidth: ms(1.5),
        backgroundColor: Color.sa_light_blue,
    },
    focusStick: {
        height: ms(15),
        backgroundColor: "#133E87",
    },
    pinCodeText: {
        fontSize: ms(19),
        fontFamily: Fonts.Font_500
    },
    ws_error: {
        color: "#B8001F",
        fontFamily: Fonts.Font_500,
        fontSize: ms(15),
        marginTop: ms(5),
    }

})