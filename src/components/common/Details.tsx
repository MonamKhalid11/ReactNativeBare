import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { WP } from 'src/styles/responsiveStyles';

interface Props {
  details: string;
}
const Details: FC<Props> = ({ details, }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{details}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   
  },
  text: {
    fontSize:WP('3.5'),
    color:'#4A4A4A'
  },
});
export default Details;
