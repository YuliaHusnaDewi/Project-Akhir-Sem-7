import React from "react";
import Icon from "./icon";


 const FavoriteButton = ({active, style}) => {
    return (
    <View 
    style={[
        {
            backgroundColor: colors.white,
            padding: 4,
            borderRadius: 20,
        },
        shadow.light,
        style,
    ]}>
        <Icon icon={active ? 'FavoriteFilled' : 'Favorite'} sizze={24} />
        </View>
        );
 };

 export default FavoriteButton;