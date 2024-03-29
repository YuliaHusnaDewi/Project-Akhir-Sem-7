import React from "react";
import { Text, View, StyleSheet} from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MainHeader = ({title}) => {
    const insets = useSafeAreaInsets();
    return 
    <View style={[styles.container, { marginTop: insets.top}]}>
        <Icon icon="Hamburger" onPress={() => {}} />
        <Text style={styles.title}>{title}</Text>
        <Icon icon="Notification" onPress={() =>{} } />
        </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: getSpaceUntilMaxLength.l,
    },
    title: {
        fontSize: sizes.h3,
        fontWeight: 'bold,'
    },

});

export default MainHeader;