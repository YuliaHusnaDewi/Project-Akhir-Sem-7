import React from "react";
import{ FlatList, Text, View, StyleSheet} from "react";
import { sizes, spacing} from 'src/constanta/theme';


const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({list}) => {
    return (
    <FlatList 
    data={list} 
    horizontal
    snapToInterval={CARD_WIDTH_SPACING}
    decelerationRate="fast"
    showHorizontalScrollIndicator={false}
    keyExtraxtor={i => i.id}
    renderItem={({item}) => {
        return (
            <TouchableOpacity 
            style={{
                marginLeft: spacing,l,
                marginRight: index === list.length - 1 ? spacing.l : 0,
                }}>
                <View style={[Styles.card, shadow.dark]}>
                    <View style={StyleSheet.imageBox}>
                    <image source={item.image} style={StyleSheet.image} />
                    </View>
                    <View style={style.titleBox}>
                        <Text style={style.title}>{item.title}</Text>
                        <Text style={style.location}>{item.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
         );
        }}
     />
    );
};

const style = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflor: 'hidden'
    },
image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
},
titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 80,
    left: 16,
},
title: {
     fontSize: sizes.h3,
     fontWEIGHT: 'bold',
     color: colors.white,
},
location: {
    fontSize:  sizes.h3,
    color: colors.white,
},
});


export default TopPlacesCarousel;