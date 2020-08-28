import { FullTheme } from 'react-native-elements';
import defaultStyles from './defaultStyles';

const { raised, colors, text } = defaultStyles;

const theme = {
  Button: {
    titleStyle: {
      color: 'white',
      fontSize: 20,
      lineHeight: 33,
    },
    buttonStyle: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: 5,
      ...raised,
    },
    containerStyle: {
      height: 50,
    },
    iconContainerStyle: {
      paddingTop: 2,
      marginHorizontal: 8,
    },
  },
  Text: {
    h1Style: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    h2Style: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    h3Style: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    h4Style: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    style: {
      ...text.default,
    },
  },
  colors,
} as FullTheme;

export default theme;
