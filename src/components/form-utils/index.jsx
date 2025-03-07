/** React Imports */
import React from 'react';

/** Libraries */
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ms } from '../../utils/helpers/metrics';

/** Main Export */
const SkeletonLoader = () => {
    return (
        <SkeletonPlaceholder
            speed={2000}
            backgroundColor="#fff"
            highlightColor="#e1e1e1"
            borderRadius={ms(6)}
        >
            <SkeletonPlaceholder.Item
                width={"80%"}
                height={ms(30)}
            />
            <SkeletonPlaceholder.Item
                width={"100%"}
                height={ms(25)}
                marginTop={ms(15)}
            />
            <SkeletonPlaceholder.Item
                width={"75%"}
                height={ms(25)}
                marginTop={ms(12)}
            />
            <SkeletonPlaceholder.Item
                width={"50%"}
                height={ms(25)}
                marginTop={ms(12)}
            />
            <SkeletonPlaceholder.Item
                width={"70%"}
                height={ms(25)}
                marginTop={ms(12)}
            />
        </SkeletonPlaceholder>
    );
}

export default SkeletonLoader;