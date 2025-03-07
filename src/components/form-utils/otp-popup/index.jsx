import { View, Text, Modal } from 'react-native'
import React from 'react'

const OtpPopup = ({ setModalVisible, modalVisible, styles }) => {
    return (
       
            <View>

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} // Close modal on back button press
                >
                    <View style={styles.sa_modal_container}>
                        <View style={styles.sa_modal_content}>
                            <Text style={styles.modalText}>Enter OTP</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={styles.closeText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
    )
}

export default OtpPopup