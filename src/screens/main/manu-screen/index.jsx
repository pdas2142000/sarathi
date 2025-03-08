/**React imports */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

/**Styles*/
import { MenuStyles } from './styles';

/**Local imports*/
import { useAuth } from '../../../utils/context/AuthContext';
import { IconProps } from '../../../utils/helpers/Iconprops';
import { ms } from '../../../utils/helpers/metrics';
import { Color } from '../../../utils/constant';

/**Icons*/
import LogoutIcon from "../../../../assets/svgs/logout.svg"

/**Main export*/
const MenuScreen = () => {
    const { logout } = useAuth();
    const styles = MenuStyles
    return (
        <View style={styles.sa_container}>
            <TouchableOpacity style={styles.sa_search_btn} onPress={() => logout()}>
                <LogoutIcon  {...IconProps(ms(17))} fill={Color.sa_error}/>
                <Text style={styles.sa_search_text}>logout</Text>
            </TouchableOpacity>
        </View> 
    )
}

export default MenuScreen