import { Colors } from 'react-native-elements';

const raised = {
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 8.0,
  elevation: 20,
};

const colors = {
  primary: '#2F5FDC',
  grey0: '#EAECF2',
  grey1: '#CFCFCD',
  grey2: '#898EA7',
  grey3: '#4A4A4A',
  grey4: '#222222',
  trainee: '#DC2F39',
  traineeLight: '#D96060',
  coach: '#2F5FDC',
  coachLight: '#6082D9',
} as Colors;

const text = {
  default: {
    color: colors.grey3,
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    lineHeight: 40,
    fontWeight: '300',
  },
  p1: {
    fontSize: 16,
    lineHeight: 28,
  },
  p2: {
    fontSize: 14,
  },
  p3: {
    fontSize: 12,
  },
};

const primaryTheme = {
  colors: {
    primary: colors.trainee,
  },
  Button: {
    buttonStyle: {
      backgroundColor: colors.trainee,
    },
  },
};

const secondaryTheme = {
  colors: {
    primary: colors.coach,
  },
  Button: {
    buttonStyle: {
      backgroundColor: colors.coach,
    },
  },
};

const screenPadding = {
  paddingTop: 20,
  paddingBottom: 30,
  paddingHorizontal: 20,
};

const defaultStyles = {
  raised,
  colors,
  screenPadding,
  text,
  primaryTheme,
  secondaryTheme,
};

export default defaultStyles;
