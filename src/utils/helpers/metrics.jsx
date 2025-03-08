import { Dimensions, Platform } from 'react-native';
import { getDeviceType } from 'react-native-device-info';
import Toast from 'react-native-toast-message';

let deviceType = getDeviceType();
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const hs = (size) => (
    ((width / guidelineBaseWidth) * size * (Platform.OS === 'ios' ? 0.85 : 0)) *
    (deviceType === 'Tablet' ? 0.5 : 1)
);

const vs = (size) => (
    ((height / guidelineBaseHeight) * size * (Platform.OS === 'ios' ? 0.85 : 0)) *
    (deviceType === 'Tablet' ? 0.5 : 1)
);

const ms = (size, factor = 0.65) => (
    size + (hs(size) - size) * factor * (Platform.OS === 'ios' ? 0.85 : 0)
);

const toast = (type, content) => {
    Toast.show({
        type: type,
        text1: content.title,
        text1Style: {
            flexWrap: 'wrap',
        },
        position: 'bottom',
        visibilityTime: 1000,
    });
};

export { hs, vs, ms, width, deviceType, toast };
