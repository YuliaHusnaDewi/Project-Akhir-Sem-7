import React from "react";
import {Text, View, StyleSheet } from 'react';
import {colors} from 'constants/theme'
import MainHeader from "../components/MainHeader";
import ScreenHeader from "../components/ScreenHeader";
import TopPlacesCarousel from "../components/TopPlacesCarousel";


const HomeScreen = () => {
    return (
    <view style={styles.container}>
        <MainHeader title="Travel App" />
        <ScreenHeader  mainTitle="Find Your" secondTitle="Dream Trip"/>
        <ScrollView showVerticalScrollIndicator={false}>
            <TopPlacesCarousel list={TOP_PLACES} />
        </ScrollView>
        <Text>Home</Text>
        </view>
    );
};

const styles = StyeleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
});

export default HomeScreen;