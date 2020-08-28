import React, { FunctionComponent } from 'react';
import { View, StyleSheet, GestureResponderEvent, Pressable, Image } from 'react-native';
import { Text } from 'react-native-elements';
import icons from 'assets/icons';
import { WP } from 'src/styles/responsiveStyles';

export interface ListItemProps {
    title: string;
    isChecked: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
const WorkOutItem: FunctionComponent<ListItemProps> = ({
    title,
    isChecked

}) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            {isChecked ?
                <Pressable>
                    <Image
                        source={icons.box_filled}
                        style={styles.box}
                        resizeMode='contain'
                    />
                </Pressable>
                :
                <Pressable>
                    <Image
                        source={icons.box_empty}
                        style={styles.box}
                        resizeMode='contain'
                    />
                </Pressable>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    box: {
        height: WP('6'),
        width: WP('6')
    }

});

export default WorkOutItem;
