import React, { FunctionComponent } from 'react';
import { View, StyleSheet, GestureResponderEvent, Pressable, Image } from 'react-native';
import { Text } from 'react-native-elements';
import icons from 'assets/icons';
import { WP } from 'src/styles/responsiveStyles';

export interface ListItemProps {
    title: string;
    isSelected: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
const WeekDaysItem: FunctionComponent<ListItemProps> = ({
    title,
    isSelected

}) => {
    return (
        <View style={isSelected ?styles.checkedContainer : styles.container}>
            <Text style = {isSelected ?styles.checkedTitle : styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        backgroundColor:"#fff",
        elevation:2,
        shadowOpacity:0.2,
        width:WP('10'),
        height:WP('10'),
    },
    checkedContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        backgroundColor:"#D6343E",
        elevation:2,
        shadowOpacity:0.2,
        width:WP('10'),
        height:WP('10'),

    },
    title: {
      color:'#4A4A4A',
      fontSize:WP('3'),
    },
    checkedTitle: {
        color:'#fff',
        fontSize:WP('3'),
      },

});

export default WeekDaysItem;
