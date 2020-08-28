import React, { FunctionComponent } from 'react';
import { View, StyleSheet, GestureResponderEvent, Pressable } from 'react-native';
import { Text } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface ListItemProps {
  title: string;
  color?: string;
  iconName?: string;
  subTitle?: string;
  onPress?: (event: GestureResponderEvent) => void;
}
const ListItem: FunctionComponent<ListItemProps> = ({
  color,
  iconName,
  title,
  subTitle,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {iconName && (
          <View style={styles.iconContainer}>
            <Icon name={iconName} style={styles.icon} size={22} color={color} />
          </View>
        )}
        <View style={styles.detailsContainer}>
          <Text style={[styles.title, { color }]}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    height: 90,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  subTitle: {
    fontSize: 14,
    lineHeight: 18,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 36,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default ListItem;
