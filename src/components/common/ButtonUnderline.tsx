import React, { FC } from 'react';
import { StyleSheet ,GestureResponderEvent, Pressable ,Text } from 'react-native';

import defaultStyles from 'src/styles/defaultStyles';
import { WP } from 'src/styles/responsiveStyles';

interface Props {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  width:string

}
const ButtonUnderLine: FC<Props> = ({ title, onPress,width }) => {
  return (
      <Pressable onPress = {onPress} style = {[styles.container,{width:width}]} >
          <Text style = {styles.title}>{title}</Text>
      </Pressable>
  )
};
const styles = StyleSheet.create({
    container: {
        display:'flex',
        borderBottomWidth:1,
        borderColor:'#898EA7',
        height:WP('5'),
        width:WP('15')
  },
  title: {
  color:'#898EA7'
  },
});
export default ButtonUnderLine;
