import React, { FunctionComponent } from 'react';
import { View, StyleSheet, GestureResponderEvent, Pressable, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { WP } from 'src/styles/responsiveStyles';

export interface ListItemProps {
    title: string;
    timing:string;
    isSelected: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
const SlotsItem: FunctionComponent<ListItemProps> = ({
    title,
    isSelected,
    timing

}) => {
    return (
        <View style={isSelected ?styles.checkedContainer : styles.container}>
            <Text style = {isSelected ?styles.checkedTitle : styles.title}>{title}</Text>
            <Text style = {isSelected ?styles.checkedTiming :styles.timing} >{timing}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display:'flex',
        borderRadius:WP('2'),
        backgroundColor:"#fff",
        elevation:2,
        shadowOpacity:0.2,
        alignItems:'center',
        width:WP('20'),
        height:WP('12'),
        marginRight:WP('2'),
        marginBottom:WP('4')
    },
    checkedContainer:{
        display:'flex',
        borderRadius:WP('2'),
        backgroundColor:"#D6343E",
        elevation:2,
        shadowOpacity:0.2,
        alignItems:'center',
        width:WP('20'),
        height:WP('12'),
        marginRight:WP('2'),
        marginBottom:WP('2')
    },
    title: {
      color:'#4A4A4A',
      fontSize:WP('3'),
      marginBottom:-WP('6'),
      fontWeight:'bold'
    },
    checkedTitle: {
        color:'#ffff',
        fontSize:WP('3'),
        marginBottom:-WP('6'),
        fontWeight:'bold'
      },
      timing: {
        color:'#4A4A4A',
        fontSize:WP('2'),
      },
      checkedTiming: {
        fontSize:WP('2'),
          color:'#fff',
        },

});

export default SlotsItem;
