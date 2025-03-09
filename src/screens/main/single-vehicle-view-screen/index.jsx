import { View, Text } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/app-header'
import { SingleViewStyles } from './style'

const SingleVehicleViewScreen = ({ route }) => {
    const styles = SingleViewStyles
    const { header_name } = route.params || {}

    return (
        <>
            <AppHeader
                {...{
                    title: header_name,
                    willGoBack: true
                }}
            />
            <View style={styles.sa_container}>
            </View>
        </>
    )
}

export default SingleVehicleViewScreen