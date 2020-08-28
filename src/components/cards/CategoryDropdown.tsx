import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title: string;
  subtitle: string;
  pictureUrl: string;
}
const CategoryDropdown: FC<Props> = ({ title, subtitle, pictureUrl, children }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: pictureUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text h2>{title}</Text>
          <Text style={styles.subtitle}>
            <Icon name="chevron-down" size={22} />
            {subtitle}
            <Icon name="chevron-down" size={22} />
          </Text>
        </View>
      </View>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'white',
  },
  image: {
    height: 130,
    width: '100%',
  },
  textContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
  },
});
export default CategoryDropdown;
