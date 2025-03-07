/** React Import */
import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Platform,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

/** Library */
import { Controller } from 'react-hook-form'
import { CountryPicker } from 'react-native-country-codes-picker'

/** Local Import */
import Formfields from '../../../utils/models/FormFields.json'

/** Local Import */
import { AppCommonStyle } from '../../../utils/styles'
import { useAuth } from '../../../utils/context/AuthContext'
import { Color, Fonts } from '../../../utils/constant'
import { ms } from '../../../utils/helpers/metrics'

/** Main  Import */
const CustomCountryCodePicker = ({
    name,
    parent,
    control,
    label,
    setCallingCode
}) => {
    const { user, Token } = useAuth()

    const Fields = Formfields
    const FieldName = parent ? Fields[parent][name] : Fields[name]
    const [showPicker, setShowPicker] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        flag: countryCodeToFlag('IN'),
        country_code: "IN",
        code: '+91',
    });

    useEffect(() => {
        if (Token) {
            const flag = countryCodeToFlag(user?.data?.user?.country === "+45" ? "DK" : user?.data?.user?.country);
            setSelectedCountry({
                flag,
                country_code: user?.data?.user?.country,
                code: `+${user?.data?.user?.country_code}`,
            });
            setCallingCode({
                flag,
                country_code: user?.data?.user?.country,
                code: `+${user?.data?.user?.country_code}`,
            });
        }
    }, [Token]);

    const handleCountrySelect = (item) => {
        const newCountry = {
            flag: countryCodeToFlag(item.code),
            country_code: item.code,
            code: item.dial_code,
        };
        setSelectedCountry(newCountry);
        setCallingCode(newCountry);
        setShowPicker(false);
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                const errorMessage = error ? (error.message ? error.message : error) : ''

                return (
                    <View style={styles.formCont}>
                        {label ? <Text style={[styles.ws_lable,]}>{FieldName?.label}</Text> : null}
                        <View style={[
                            styles.wrapper,
                            errorMessage ? styles.ws_error_border : null,

                        ]}
                        >
                            <TouchableOpacity
                                style={[styles.input_field_wrap, { height: "100%" }]}
                                onPress={() => setShowPicker(true)}
                            >
                                <View style={styles.sa_line}/>
                                <Text style={[styles.countryName,]}>
                                    {selectedCountry.code}
                                </Text>
                                <Text style={{ fontSize: ms(22) }}>
                                    {selectedCountry.flag}
                                </Text>
                            </TouchableOpacity>
                            <CountryPicker
                                show={showPicker}
                                pickerButtonOnPress={handleCountrySelect}
                                onBackdropPress={() => setShowPicker(false)}
                                style={{
                                    modal: {
                                        height: "91%",
                                        padding: ms(0),
                                    },
                                    line: {
                                        backgroundColor: "transparant",
                                    },
                                    countryButtonStyles: {
                                        backgroundColor: "transparant",
                                        height: ms(55),
                                        borderBottomWidth: ms(.7),
                                        borderColor: "#dadada",
                                        borderRadius: ms(0),
                                        paddingLeft: ms(10)
                                    },
                                    textInput: {
                                        height: ms(50),
                                        paddingLeft: ms(15),
                                        marginTop: ms(10),
                                        marginBottom: ms(5),
                                        marginHorizontal: ms(10),
                                    },
                                    flag: {
                                        marginRight: ms(-15),
                                        fontSize: ms(26)
                                    },
                                    dialCode: {
                                        marginRight: ms(-20),

                                    },
                                    line: {
                                        backgroundColor: "transparant",
                                        borderBottomWidth: ms(.7),
                                        borderColor: "#dadada",
                                    },
                                    countryName: {
                                        // color: theme.text,
                                        fontFamily:Fonts.Font_500
                                    }
                                }}
                            />
                            <TextInput
                                style={[styles.input_field, styles.ws_contryCode,]}
                                value={value}
                                placeholder={FieldName?.placeholder}
                                placeholderTextColor={Color.sa_grey}
                                onBlur={onBlur}
                                onFocus={onBlur}
                                onChangeText={(text) => {
                                    onChange(text)
                                }}
                                autoCapitalize="none"
                                keyboardType={"number-pad"}
                            />
                        </View>
                        {errorMessage ? (
                            <Text style={styles.ws_error}>{errorMessage}</Text>
                        ) : null}
                    </View>
                )
            }}
        />
    )
}

export default CustomCountryCodePicker

const countryCodeToFlag = (code) => {
    return code
        .toUpperCase()
        .replace(/./g, (char) =>
            String.fromCodePoint(127397 + char.charCodeAt())
        );
};

const styles = StyleSheet.create({
    input_field: {
        fontSize: ms(13),
        fontFamily: Fonts.Font_500,
        color: Color.sa_black,
        flex: 1,
        height: "100%",
        paddingLeft: ms(10)
    },
    input_field: {
        fontSize: ms(14),
        fontFamily: Fonts.Font_500,
        color: Color.sa_black,
        flex: 1,
        height: "100%",
        paddingLeft: ms(10)
    },
    countryName: {
        fontFamily: Fonts.Font_500,
        fontSize: ms(14),
        color: Color.sa_border,
        marginLeft: ms(5)
    },
    formCont: {
        marginBottom: ms(12)
    },
    wrapper: {
        height: ms(45),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: ms(1.2),
        borderColor: Color.sa_border,
        borderRadius: ms(15),
        paddingLeft: ms(10),
    },
    ws_lable: {
        fontFamily: Fonts.Font_600,
        color: Color.ws_text,
        fontSize: ms(12),
        // textTransform: "capitalize",
        paddingBottom: ms(5),
    },
    input_field_wrap: {
        flexDirection: "row",
        alignItems: "center",
        flexDirection: "row-reverse",
    },
    sa_line:{
        borderRightWidth: ms(1.2),
        borderColor: Color.sa_border,
        height:ms(30),
        width:ms(5),
    },
    ws_error:{
        color:"red",
        fontFamily:Fonts.Font_500,
        fontSize:ms(12),
        marginTop:ms(5),
        marginLeft:ms(5)
    }

  
})
