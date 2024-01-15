import React from "react";
import { Image } from "react-native";

const Icon = ({onPress, icon, style, size = 32}) => {
    const image = (
    <Image 
    source={icons[Icon]}
    style={[{width: size, height: size, resizeMode: 'cover'}, style]}
     />
    );

    if (onPress) {
        return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>
    }
    return image;
};

export default Icon;