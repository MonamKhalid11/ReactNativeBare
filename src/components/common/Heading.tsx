import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { WP } from 'src/styles/responsiveStyles';

interface Props {
  heading: string;
}
const Heading: FC<Props> = ({ heading, }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   
  },
  text: {
    fontSize: WP('4'),
    fontWeight: 'bold',
    color:"#4A4A4A"
  },
});
export default Heading;
