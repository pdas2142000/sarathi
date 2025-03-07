/**React import */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

/**Local import */
import Formfields from '../../../utils/models/FormFields.json';
import { IconProps } from '../../../utils/helpers/Iconprops';
import { ms } from '../../../utils/helpers/metrics';

/**Liabary */
import { Controller } from 'react-hook-form';
import { getDeviceType } from 'react-native-device-info';
import { Color } from '../../../utils/constant';

/** Icons */
// import ShowIcon from "../../../../assets/svgs/auth-svgs/eye.svg"
// import HideIcon from "../../../../assets/svgs/auth-svgs/eye_close.svg"

let deviceType = getDeviceType()

const CustomInput = ({
    name,
    parent,
    control,
    type,
    label,
    styles,
    keyboardType,
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const Fields = Formfields;
    const FieldName = parent ? Fields[parent][name] : Fields[name];

    const toCapitalCase = (text) => {
        let result = text.toLowerCase().replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase());
        return result;
    };

    const toTitleCase = (text) => {
        return text.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
    };

    const handleChange = (field, value) => {
        // Restrict numeric inputs to 10,000 maximum for credit type
        if (type === "credit") {
            const numericValue = parseInt(value, 10) || 0;
            field.onChange(Math.min(numericValue, 10000)); // Cap value at 10,000
        } else if (name === 'first_name' || name === 'last_name') {
            field.onChange(toCapitalCase(value));
        } else if (name === 'company_name') {
            field.onChange(toTitleCase(value));
        } else {
            field.onChange(value);
        }
    };

    // const togglePasswordVisibility = () => {
    //     setIsPasswordVisible((prevState) => !prevState);
    // };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, onFocus }, fieldState: { error } }) => {
                return (
                    <View style={[styles.input_wrap]}>
                        {label ? (
                            <Text style={styles.FormLabel}>{FieldName?.label}</Text>
                        ) : null}
                        <View style={[styles.wrapper,]}>
                            <TextInput
                                style={[
                                    styles.input_field,
                                    type === 'textarea' ? styles.textarea : null,

                                ]}
                                placeholder={FieldName?.placeholder}
                                value={value || ''}
                                onBlur={onBlur}
                                onFocus={onBlur}
                                onChangeText={(text) => handleChange({ onChange }, text)}
                                placeholderTextColor={Color.sa_grey}
                                autoCapitalize="none"
                                multiline={type == 'textarea' ? true : false}
                                keyboardType={keyboardType}
                           
                            />
                            
                        </View>
                        {error && <Text style={styles.error} > {error.message} </Text>}
                    </View>
                );
            }}
        />
    );
};

export default CustomInput;
